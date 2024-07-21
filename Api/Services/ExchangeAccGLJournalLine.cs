using Api;
using Api.Models;
using Api.Enums;

namespace Api.Services
{
    public class ExchangeAccGLJournalLine()
    {

        public void Run(GenJournalLine Rec)
        {
            GenJournalLine genJournalLine2 = Rec;
            Rec.AccountType = genJournalLine2.BalAccountType;
            Rec.AccountId = genJournalLine2.BalAccountId ;
            Rec.VATPercentage = genJournalLine2.BalVATPercentage;
            Rec.VATAmount = genJournalLine2.VATAmount;
            Rec.GenPostingType = genJournalLine2.BalGenPostingType;
            Rec.GeneralBusinessPostingGroupId = genJournalLine2.BalGenBusPostingGroupId;
            Rec.GeneralProductPostingGroupId = genJournalLine2.BalGeneralProductPostingGroupId;
            Rec.VATBusPostingGroupId = genJournalLine2.BalVATBusPostingGroupId;
            Rec.VATProdPostingGroupId = genJournalLine2.BalVATProdPostingGroupId;
            Rec.VATBaseAmount = genJournalLine2.BalVATBaseAmount;
            Rec.VATBaseAmountLCY = genJournalLine2.BalVATBaseAmountLCY;

            Rec.BalAccountType = genJournalLine2.AccountType;
            Rec.BalAccountId = genJournalLine2.AccountId;
            Rec.BalVATPercentage = genJournalLine2.VATPercentage;
            Rec.BalVATAmount = genJournalLine2.VATAmount;
            Rec.BalGenPostingType = genJournalLine2.GenPostingType;
            Rec.BalGenBusPostingGroupId = genJournalLine2.GeneralBusinessPostingGroupId;
            Rec.BalGeneralProductPostingGroupId = genJournalLine2.GeneralProductPostingGroupId;
            Rec.BalVATBusPostingGroupId = genJournalLine2.VATBusPostingGroupId;
            Rec.BalVATProdPostingGroupId = genJournalLine2.VATProdPostingGroupId;
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
