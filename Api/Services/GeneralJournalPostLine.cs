using Api;
using Api.Models;
using Api.Enums;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Rest.ClientRuntime.Azure.Authentication.Utilities;
using Microsoft.EntityFrameworkCore.Utilities;


namespace Api.Services
{
    public class GeneralJournalPostLine(ApiDbContext apiDbContext)
    {
        private readonly GenJnlPostLineUtils postLineUtils = new(apiDbContext);
        private readonly ExchangeAccGLJournalLine exchangeAccGLJournalLine = new();
        private GenJournalDocumentType? lastDocType;
        private string? lastDocNo;
        private DateTime? lastDate;
        private int glEntryNo = 0;
        private int nextEntryNo = 0;
        private decimal currentBalance = 0;
        private int nextVATEntryNo = 0;


        private GeneralJournalLine _genJournalLine = new GeneralJournalLine();
        public int RunWithoutCheck(GeneralJournalLine genJournalLine)
        {
            _genJournalLine = genJournalLine;
            Code();
            return glEntryNo;
        }

        private void Code()
        {
            bool balancing = false;
            if (EmptyLine())
            {
                InitLastDocDate(_genJournalLine);
                return;
            }
            if (_genJournalLine.DocumentDate == default)
                _genJournalLine.DocumentDate = _genJournalLine.PostingDate;
            if (_genJournalLine.DueDate == default)
                _genJournalLine.DueDate = _genJournalLine.PostingDate;
            OnBeforeStartOrContinuePosting();
            if (nextEntryNo == 0)
                StartPosting();
            else
                ContinuePosting();
            if (_genJournalLine.AccountId != Guid.Empty)
            {
                if (_genJournalLine.BalAccountId != Guid.Empty && (_genJournalLine.AccountType == GenJournalAccountType.Customer || _genJournalLine.AccountType == GenJournalAccountType.Vendor))
                {
                    exchangeAccGLJournalLine.Run(_genJournalLine);
                    balancing = true;
                }
                PostGenJnlLine(balancing);
            }
            if (_genJournalLine.BalAccountId != Guid.Empty)
            {
                exchangeAccGLJournalLine.Run(_genJournalLine);
                PostGenJnlLine(!balancing);
            }
            FinishPosting();
        }



        private void StartPosting()
        {
            InitNextEntryNo();
            InitLastDocDate(_genJournalLine);
            currentBalance = 0;
        }

        private void ContinuePosting()
        { }

        private void InitNextEntryNo()
        {
            nextEntryNo = postLineUtils.GetNextGLEntryNo();
        }
        private void InitLastDocDate(GeneralJournalLine journalLine)
        {
            lastDocType = journalLine.DocumentType;
            lastDocNo = journalLine.DocumentNo;
            lastDate = journalLine.PostingDate;
        }

        private bool EmptyLine()
        {
            return _genJournalLine.AccountId == Guid.Empty && _genJournalLine.Amount == 0 && _genJournalLine.BalAccountId == Guid.Empty;
        }

        public void OnBeforeStartOrContinuePosting()
        { }

        private void PostGenJnlLine(bool balancing)
        {
            Console.WriteLine($"Account type is {_genJournalLine.AccountType}");
            switch (_genJournalLine.AccountType)
            {
                case GenJournalAccountType.GLAccount:
                    {
                        PostGLAcc();
                        break;
                    }
                case GenJournalAccountType.Customer:
                    {
                        PostCust();
                        break;
                    }
                default:
                    {
                        throw new Exception($"Cant post. Unhandled account type {_genJournalLine.AccountType.ToString()} for journal line {_genJournalLine.DocumentNo}, right now can only handle account type {GenJournalAccountType.GLAccount}");
                        // break;
                    }
            }
        }

        private void PostCust()
        {

        }

        private void PostGLAcc()
        {
            GLAccount glAccount = postLineUtils.GetGLAccountById(_genJournalLine.AccountId);
            if (_genJournalLine.AmountLCY == 0) 
            {
                _genJournalLine.AmountLCY = _genJournalLine.Amount;
            }
            GLEntry glEntry = InitGLEntry(glAccount.Id, _genJournalLine.AmountLCY);
            CheckGLAccDirectPosting();
            glEntry.GenPostingType = _genJournalLine.GeneralPostingType;
            glEntry.BalAccountType = _genJournalLine.BalAccountType;
            glEntry.BalAccountId = _genJournalLine.BalAccountId ;
            // store entry no to class variable for return 
            glEntryNo = glEntry.EntryNo;
            InitVAT(glEntry);
            InsertGLEntry(glEntry);
            PostVAT(glEntry);


        }

        private void InsertGLEntry(GLEntry glEntry)
        {
            // Check.NotEmptyNotNull(glEntry.GLAccountNo);
            glEntry.UpdateDebitCredit();
            apiDbContext.GLEntries.Add(glEntry);
            IncrNextEntryNo();
        }


        private void CheckGLAccDirectPosting()
        {
            GLAccount glAccount = postLineUtils.GetGLAccountById(_genJournalLine.AccountId);
            MyCheck.MustEqual(glAccount.DirectPosting, true);
        }

        private GLEntry InitGLEntry(Guid glAccountId, decimal amount)
        {
            GLAccount glAccount = postLineUtils.GetGLAccountById(glAccountId);
            Check.NotEmptyNotNull(glAccountId.ToString());
            MyCheck.MustEqual(glAccount.Blocked, false);
              MyCheck.MustEqual(glAccount.AccountType, GLAccountType.Posting);

            GLEntry glEntry = new GLEntry();
            glEntry.CopyFromGenJnlLine(_genJournalLine);
            glEntry.EntryNo = nextEntryNo;
            glEntry.GLAccountId = glAccountId;
            glEntry.Amount = amount;
            return glEntry;
        }

        private void IncrNextEntryNo()
        {
            nextEntryNo += 1;
        }

        public void FinishPosting()
        {
            // check consistency
            // set gl register . to entry no
        }

        public void InitVAT(GLEntry glEntry)
        {
            // if (_genJournalLine.GenPostingType == 0) return;
            VATPostingSetup vatPostingSetup = postLineUtils.GetVATPostingSetup(_genJournalLine);
            glEntry.CopyPostingGroupsFromGenJnlLine(_genJournalLine);

            // vat difference is  zero. We assume it will always be
            glEntry.VATAmount = _genJournalLine.AmountLCY * vatPostingSetup.VATPercentage / (100 + vatPostingSetup.VATPercentage);
            glEntry.Amount = _genJournalLine.AmountLCY - glEntry.VATAmount;
        }

        public void PostVAT(GLEntry glEntry)
        {
            _genJournalLine.VATBaseAmount = glEntry.Amount;
            InsertVAT(glEntry.Amount, glEntry.VATAmount, _genJournalLine.VATBaseAmountLCY);
        }

        public void InsertVAT(decimal glEntryAmount, decimal glEntryVATAmount, decimal glEntryBaseAmount)
        {
            VATEntry vatEntry = new();
            vatEntry.CopyFromGenJnlLine(_genJournalLine);
            if (nextVATEntryNo == 0)
                nextVATEntryNo = postLineUtils.GetNextVATEntryNo();
            else
                nextVATEntryNo += 1;
            vatEntry.EntryNo = nextVATEntryNo;

            // TODO. in future, make sure it doesnt populate some fields if gen. posting type is blank/0

            vatEntry.Amount = glEntryVATAmount;
            vatEntry.Base = glEntryBaseAmount;
            apiDbContext.VATEntries.Add(vatEntry);
            InsertVATForGLEntry(glEntryVATAmount);
        }

        private void InsertVATForGLEntry(decimal glEntryVATAmount)
        {
            if (glEntryVATAmount == 0) return;
            VATPostingSetup vatPostingSetup = postLineUtils.GetVATPostingSetup(_genJournalLine);

            switch (_genJournalLine.GeneralPostingType)
            {
                case GLGeneralPostingType.Sale:
                    {
                        CreateGLEntry(vatPostingSetup.GetSalesAccount(), glEntryVATAmount);
                        break;
                    }
            }
        }

        private void CreateGLEntry(Guid accountId, decimal amount)
        {
            GLEntry glEntry = InitGLEntry(accountId, amount);
            InsertGLEntry(glEntry);
        }

    }


}