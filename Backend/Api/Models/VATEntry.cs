using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;

namespace Api.Models
{
    [Index(nameof(EntryNo), IsUnique=true)]
    public class VATEntry : Model
    {
        public int EntryNo { get; set; }

        [ForeignKey(nameof(GeneralBusinessPostingGroup))]
        public Guid GeneralBusinessPostringGroupId { get; set; } 

        [ForeignKey(nameof(GeneralProductPostingGroup))]
        public Guid GeneralProductPostingGroupId { get; set; } 

        public DateTime PostingDate { get; set; }
        public string DocumentNo { get; set; } = "";

        public GenJournalDocumentType DocumentType { get; set; }


        public GLGeneralPostingType Type { get; set; }
        public decimal Base { get; set; }
        public decimal Amount { get; set; }
        public Guid UserId { get; set; }

        [ForeignKey(nameof(ClosedByVATEntry))]
        public Guid ClosedByEntryNo { get; set; }
        public bool Closed { get; set; }
        public string ExternalDocumentNo { get; set; } = "";
        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusPostingGroupId { get; set; } 
        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProdPostingGroupId { get; set; } 
        public decimal VATBaseDiscountPercentage { get; set; }
        public DateTime DocumentDate { get; set; }
        public bool Reversed { get; set; }


        public VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }

        public VATProductPostingGroup? VATProductPostingGroup { get; set; }

        public VATEntry? ClosedByVATEntry;

        public void CopyFromGenJnlLine(GeneralJournalLine genJournalLine)
        {
            CopyPostingGroupsFromGenJnlLine(genJournalLine);
            PostingDate = genJournalLine.PostingDate;
            DocumentDate = genJournalLine.DocumentDate;
            DocumentType = genJournalLine.DocumentType;
            DocumentNo = genJournalLine.DocumentNo;
            ExternalDocumentNo = genJournalLine.ExternalDocumentNo;
            Type = genJournalLine.GeneralPostingType;
        }

        public void CopyPostingGroupsFromGenJnlLine(GeneralJournalLine genJournalLine)
        {
            GeneralBusinessPostringGroupId = genJournalLine.GeneralBusinessPostingGroupId ;
            GeneralProductPostingGroupId = genJournalLine.GeneralProductPostingGroupId ;
            VATBusPostingGroupId = genJournalLine.VATBusinessPostingGroupId ;
            VATProdPostingGroupId = genJournalLine.VATProductPostingGroupId ;
        }
    }

}