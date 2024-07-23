using Api;
using Api.Models;
using Api.Enums;

namespace Api.Services
{
    public class ExchangeAccGLJournalLine()
    {

        public void Run(GeneralJournalLine Rec)
        {
            GeneralJournalLine genJournalLine2 = Rec;
            Rec.AccountType = genJournalLine2.BalAccountType;
            Rec.AccountId = genJournalLine2.BalAccountId ;
            Rec.VATPercentage = genJournalLine2.BalVATPercentage;
            Rec.VATAmount = genJournalLine2.VATAmount;
            Rec.GeneralPostingType = genJournalLine2.BalGeneralPostingType;
            Rec.GeneralBusinessPostingGroupId = genJournalLine2.BalGeneralBusinessPostingGroupId;
            Rec.GeneralProductPostingGroupId = genJournalLine2.BalGeneralProductPostingGroupId;
            Rec.VATBusinessPostingGroupId = genJournalLine2.BalVATBusinessPostingGroupId;
            Rec.VATProductPostingGroupId = genJournalLine2.BalVATProductPostingGroupId;
            Rec.VATBaseAmount = genJournalLine2.BalVATBaseAmount;
            Rec.VATBaseAmountLCY = genJournalLine2.BalVATBaseAmountLCY;

            Rec.BalAccountType = genJournalLine2.AccountType;
            Rec.BalAccountId = genJournalLine2.AccountId;
            Rec.BalVATPercentage = genJournalLine2.VATPercentage;
            Rec.BalVATAmount = genJournalLine2.VATAmount;
            Rec.BalGeneralPostingType = genJournalLine2.GeneralPostingType;
            Rec.BalGeneralBusinessPostingGroupId = genJournalLine2.GeneralBusinessPostingGroupId;
            Rec.BalGeneralProductPostingGroupId = genJournalLine2.GeneralProductPostingGroupId;
            Rec.BalVATBusinessPostingGroupId = genJournalLine2.VATBusinessPostingGroupId;
            Rec.BalVATProductPostingGroupId = genJournalLine2.VATProductPostingGroupId;
            Rec.BalVATBaseAmount = genJournalLine2.VATBaseAmount;
            Rec.BalVATBaseAmountLCY = genJournalLine2.VATBaseAmountLCY;

            Rec.Amount = -genJournalLine2.Amount;
            Rec.DebitAmount = genJournalLine2.CreditAmount;
            Rec.CreditAmount = genJournalLine2.DebitAmount;
            Rec.AmountLCY = -genJournalLine2.AmountLCY;
            Rec.BalanceLCY = -genJournalLine2.BalanceLCY;

        }
    }
}
