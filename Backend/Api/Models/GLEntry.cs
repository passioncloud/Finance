using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;

namespace Api.Models;

[Index(nameof(EntryNo), IsUnique = true)]
public class GLEntry : Model
{
    public int EntryNo { get; set; }

    [ForeignKey(nameof(GLAccount))]
    public Guid GLAccountId { get; set; }


    public DateTime PostingDate { get; set; }
    public GenJournalDocumentType DocumentType { get; set; }
    public string DocumentNo { get; set; } = "";
    public string Description { get; set; } = "";

    public GenJournalAccountType BalAccountType { get; set; }


    public Guid BalAccountId { get; set; }

    public decimal Amount { get; set; }
    public Guid UserId { get; set; }
    public decimal Quantity { get; set; }
    public decimal VATAmount { get; set; }
    [ForeignKey(nameof(GeneralJournalBatch))]
    public Guid GeneralJournalBatchId { get; set; }
    public GLGeneralPostingType GenPostingType { get; set; }
    [ForeignKey(nameof(GeneralBusinessPostingGroup))]
    public Guid GeneralBusinessPostingGroupId { get; set; }
    [ForeignKey(nameof(GeneralProductPostingGroup))]
    public Guid GeneralProductPostingGroupId { get; set; }
    public decimal DebitAmount { get; set; }
    public decimal CreditAmount { get; set; }
    public DateTime DocumentDate { get; set; }
    public string ExternalDocumentNo { get; set; } = "";
    [ForeignKey(nameof(VATBusinessPostingGroup))]
    public Guid VATBusinessPostingGroupId { get; set; }
    [ForeignKey(nameof(VATProductPostingGroup))]
    public Guid VATProductPostingGroupId { get; set; }

    public bool Reversed { get; set; }



    public virtual GLAccount? GLAccount { get; set; }



    public void CopyFromGenJnlLine(GeneralJournalLine genJournalLine)
    {
        PostingDate = genJournalLine.PostingDate;
        DocumentDate = genJournalLine.DocumentDate;
        DocumentType = genJournalLine.DocumentType;
        DocumentNo = genJournalLine.DocumentNo ?? "";
        ExternalDocumentNo = genJournalLine.ExternalDocumentNo ?? "";
        Description = genJournalLine.Description ?? "";
        Quantity = genJournalLine.Quantity;
        GeneralJournalBatchId = genJournalLine.GeneralJournalBatchId;
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

    public void CopyPostingGroupsFromGenJnlLine(GeneralJournalLine genJournalLine)
    {
        GenPostingType = genJournalLine.GeneralPostingType;
        GeneralBusinessPostingGroupId = genJournalLine.GeneralBusinessPostingGroupId;
        GeneralProductPostingGroupId = genJournalLine.GeneralProductPostingGroupId;
        VATBusinessPostingGroupId = genJournalLine.VATBusinessPostingGroupId;
        VATProductPostingGroupId = genJournalLine.VATProductPostingGroupId;
    }


}

