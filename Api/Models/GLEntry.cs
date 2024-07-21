using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;

namespace Api.Models;

[Index(nameof(EntryNo), IsUnique = true)]
public class GLEntry
{
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    [Key]
    public int EntryNo { get; set; }

    [ForeignKey(nameof(GLAccount))]
    public Guid GLAccountId { get; set; }


    public virtual GLAccount? GLAccount { get; set; }

    public DateOnly PostingDate { get; set; }
    public GenJournalDocumentType DocumentType { get; set; }
    public string DocumentNo { get; set; } = "";
    public string Description { get; set; } = "";

    public GenJournalAccountType BalAccountType { get; set; }

    public Guid BalAccountId { get; set; }

    public decimal Amount { get; set; }
    public string UserId { get; set; } = "";
    public decimal Quantity { get; set; }
    public decimal VATAmount { get; set; }
    public string JournalBatchName { get; set; } = "";
    public GLGenPostingType GenPostingType { get; set; }
    public Guid GenBusPostingGroupId { get; set; }
    public Guid GenProdPostingGroupId { get; set; }
    public decimal DebitAmount { get; set; }
    public decimal CreditAmount { get; set; }
    public DateOnly DocumentDate { get; set; }
    public string ExternalDocumentNo { get; set; } = "";

    public Guid VATBusPostingGroupId { get; set; }
    public Guid VATProdPostingGroupId { get; set; }

    public bool Reversed { get; set; }



    public void CopyFromGenJnlLine(GenJournalLine genJournalLine)
    {
        PostingDate = genJournalLine.PostingDate;
        DocumentDate = genJournalLine.DocumentDate ?? genJournalLine.PostingDate;
        DocumentType = genJournalLine.DocumentType;
        DocumentNo = genJournalLine.DocumentNo ?? "";
        ExternalDocumentNo = genJournalLine.ExternalDocumentNo ?? "";
        Description = genJournalLine.Description ?? "";
        Quantity = genJournalLine.Quantity;
        JournalBatchName = genJournalLine.JournalBatchName;
        UserId = "TEST USER";
    }

    public void UpdateDebitCredit()
    {
        if (Amount > 0)
        {
            DebitAmount = Amount;
            CreditAmount = 0;
        }
        else
        {
            DebitAmount = 0;
            CreditAmount = -Amount;
        }
    }

    public void CopyPostingGroupsFromGenJnlLine(GenJournalLine genJournalLine)
    {
        GenPostingType = genJournalLine.GenPostingType;
        GenBusPostingGroupId = genJournalLine.GeneralBusinessPostingGroupId;
        GenProdPostingGroupId = genJournalLine.GeneralProductPostingGroupId;
        VATBusPostingGroupId = genJournalLine.VATBusPostingGroupId;
        VATProdPostingGroupId = genJournalLine.VATProdPostingGroupId;
    }


}

