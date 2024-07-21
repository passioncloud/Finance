using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Api.Enums;

namespace Api.Models;

[Index(nameof(GeneralJournalTemplateId), nameof(GeneralJournalBatchId), nameof(LineNo), IsUnique = true)]
public class GeneralJournalLine : Model
{
    [ForeignKey(nameof(GeneralJournalTemplate))]
    public Guid GeneralJournalTemplateId { get; set; } 
    [ForeignKey(nameof(GeneralJournalBatch))]
    public Guid GeneralJournalBatchId { get; set; } 
    public int LineNo { get; set; }
    public GenJournalAccountType AccountType { get; set; }

    [ForeignKey(nameof(Account))]
    public Guid AccountId { get; set; }
    public GLAccount? Account { get; set; }
    public DateTime PostingDate { get; set; }
    public GenJournalDocumentType DocumentType { get; set; }
    public string DocumentNo { get; set; } = "";
    public string Description { get; set; } = "";
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
    public DateTime DueDate { get; set; }
    public decimal Quantity { get; set; }
    public decimal VATAmount { get; set; }
    public decimal AppliesToId { get; set; }
    public GLGeneralPostingType GeneralPostingType { get; set; }
    [ForeignKey(nameof(GeneralBusinessPostingGroup))]
    public Guid GeneralBusinessPostingGroupId { get; set; }
    [ForeignKey(nameof(GeneralProductPostingGroup))]
    public Guid GeneralProductPostingGroupId { get; set; }
    public GLGeneralPostingType BalGeneralPostingType { get; set; }
    [ForeignKey(nameof(BalGeneralBusinessPostingGroup))]
    public Guid BalGeneralBusinessPostingGroupId { get; set; }
    [ForeignKey(nameof(BalGeneralProductPostingGroup))]
    public Guid BalGeneralProductPostingGroupId { get; set; }
    public decimal BalVATPercentage { get; set; }
    public decimal BalVATAmount { get; set; }
    public decimal VATBaseAmount { get; set; }
    public decimal BalVATBaseAmount { get; set; }
    public decimal VATBaseAmountLCY { get; set; }
    public decimal BalVATBaseAmountLCY { get; set; }
    public DateTime DocumentDate { get; set; }
    public string ExternalDocumentNo { get; set; } = "";
    public Guid PostingNoSeries { get; set; }

    [ForeignKey(nameof(VATBusinessPostingGroup))]
    public Guid VATBusinessPostingGroupId { get; set; }

    [ForeignKey(nameof(VATProductPostingGroup))]
    public Guid VATProductPostingGroupId { get; set; }

    [ForeignKey(nameof(BalVATBusinessPostingGroup))]
    public Guid BalVATBusinessPostingGroupId { get; set; }

    [ForeignKey(nameof(BalVATProductPostingGroup))]
    public Guid BalVATProductPostingGroupId { get; set; }
    public bool Prepayment { get; set; }
    public string? PaymentMethodCode { get; set; }



    public virtual GeneralJournalTemplate? GeneralJournalTemplate { get;set;}
    public virtual GeneralJournalBatch? GeneralJournalBatch { get;set;}
    public virtual GeneralBusinessPostingGroup? GeneralBusinessPostingGroup { get; set; }
    public virtual GeneralProductPostingGroup? GeneralProductPostingGroup { get; set; }
    public virtual GeneralBusinessPostingGroup? BalGeneralBusinessPostingGroup { get; set; }
    public virtual GeneralProductPostingGroup? BalGeneralProductPostingGroup { get; set; }


    public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
    public virtual VATProductPostingGroup? VATProductPostingGroup { get; set; }
    public virtual VATBusinessPostingGroup? BalVATBusinessPostingGroup { get; set; }
    public virtual VATProductPostingGroup? BalVATProductPostingGroup { get; set; }



}
