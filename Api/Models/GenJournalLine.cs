using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Api.Enums;

namespace Api.Models;

 [Index(nameof(JournalTemplateName), nameof(JournalBatchName), nameof(LineNo), IsUnique = true)]
    public class GenJournalLine : Model
    {
        public string JournalTemplateName { get; set; } = "";
        public string JournalBatchName { get; set; } = "";
        public int LineNo { get; set; }
        public GenJournalAccountType AccountType { get; set; }

        [ForeignKey(nameof(Account))]
        public Guid AccountId { get; set; } 
        public GLAccount? Account { get; set; }
        public DateOnly PostingDate { get; set; }
        public GenJournalDocumentType DocumentType { get; set; }
        public string? DocumentNo { get; set; }
        public string? Description { get; set; }
        public decimal VATPercentage { get; set; }
        
        public GenJournalAccountType BalAccountType { get; set; }
        public Guid BalAccountId { get; set; }
        public string? CurrencyCode { get; set; }
        public decimal Amount { get; set; }
        public decimal DebitAmount { get; set; }
        public decimal CreditAmount { get; set; }
        public decimal AmountLCY { get; set; }
        public decimal BalanceLCY { get; set; }
        public decimal CurrencyFactor { get; set; }
        public GenJournalAccountType AppliesToDocType { get; set; }
        public string? AppliesToDocNo { get; set; }
        public DateOnly? DueDate { get; set; }
        public decimal Quantity { get; set; }
        public decimal VATAmount { get; set; }
        public decimal AppliesToId { get; set; }
        public GLGenPostingType GenPostingType { get; set; }
        public Guid GeneralBusinessPostingGroupId { get; set; }
        public Guid GeneralProductPostingGroupId { get; set; }
        public GLGenPostingType BalGenPostingType { get; set; }
        public Guid BalGenBusPostingGroupId { get; set; }
        public Guid BalGeneralProductPostingGroupId { get; set; }
        public decimal BalVATPercentage { get; set; }
        public decimal BalVATAmount { get; set; }
        public decimal VATBaseAmount { get; set; }
        public decimal BalVATBaseAmount { get; set; }
        public decimal VATBaseAmountLCY { get; set; }
        public decimal BalVATBaseAmountLCY { get; set; }
        public DateOnly? DocumentDate { get; set; }
        public string? ExternalDocumentNo { get; set; }
        public Guid PostingNoSeries { get; set; }

        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusPostingGroupId { get; set; } 

        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProdPostingGroupId { get; set; } 

        [ForeignKey(nameof(BalVATBusinessPostingGroup))]
        public Guid BalVATBusPostingGroupId { get; set; }

        [ForeignKey(nameof(BalVATProductPostingGroup))]
        public Guid BalVATProdPostingGroupId { get; set; }
        public bool Prepayment { get; set; }
        public string? PaymentMethodCode { get; set; }

        public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
        public virtual VATProductPostingGroup? VATProductPostingGroup { get; set; }
        public virtual VATBusinessPostingGroup? BalVATBusinessPostingGroup { get; set; }
        public virtual VATProductPostingGroup? BalVATProductPostingGroup { get; set; }



    }
