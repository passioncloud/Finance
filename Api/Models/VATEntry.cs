using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;

namespace Api.Models
{
    public class VATEntry : Model
    {
        public int EntryNo { get; set; }
        public Guid GenBusPostringGroupId { get; set; } 
        public Guid GenProdPostingGroupId { get; set; } 

        public DateOnly PostingDate { get; set; }
        public string DocumentNo { get; set; } = "";

        public GenJournalDocumentType DocumentType { get; set; }


        public GLGenPostingType Type { get; set; }
        public decimal Base { get; set; }
        public decimal Amount { get; set; }
        public string UserId { get; set; } = "";

        [ForeignKey(nameof(ClosedByVATEntry))]
        public Guid ClosedByEntryNo { get; set; }
        public bool Closed { get; set; }
        public string ExternalDocumentNo { get; set; } = "";
        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusPostingGroupId { get; set; } 
        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProdPostingGroupId { get; set; } 
        public decimal VATBaseDiscountPercentage { get; set; }
        public DateOnly DocumentDate { get; set; }
        public bool Reversed { get; set; }


        public VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }

        public VATProductPostingGroup? VATProductPostingGroup { get; set; }

        public VATEntry? ClosedByVATEntry;

        public void CopyFromGenJnlLine(GenJournalLine genJournalLine)
        {
            CopyPostingGroupsFromGenJnlLine(genJournalLine);
            PostingDate = genJournalLine.PostingDate;
            DocumentDate = genJournalLine.DocumentDate ?? genJournalLine.PostingDate;
            DocumentType = genJournalLine.DocumentType;
            DocumentNo = genJournalLine.DocumentNo;
            ExternalDocumentNo = genJournalLine.ExternalDocumentNo;
            Type = genJournalLine.GenPostingType;
            UserId = "TEST USER";
        }

        public void CopyPostingGroupsFromGenJnlLine(GenJournalLine genJournalLine)
        {
            GenBusPostringGroupId = genJournalLine.GeneralBusinessPostingGroupId ;
            GenProdPostingGroupId = genJournalLine.GeneralProductPostingGroupId ;
            VATBusPostingGroupId = genJournalLine.VATBusPostingGroupId ;
            VATProdPostingGroupId = genJournalLine.VATProdPostingGroupId ;
        }
    }

}