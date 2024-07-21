using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;


namespace Api.Models
{

    public class CustomerLedgerEntry : Model
    {

        public int EntryNo { get; set; }
        public Guid CustomerId { get; set; } 
        public DateOnly PostingDate { get; set; }
        public GenJournalDocumentType DocumentType { get; set; }
        public string DocumentNo { get; set; } = "";
        public string Description { get; set; } = "";
        public string CustomerName { get; set; } = "";
        public decimal Amount { get; set; }
        public string CustomerPostingGroupCode { get; set; } = "";
        public string UserId { get; set; }
        public GenJournalDocumentType AppliesToDocType { get; set; }
        public string? AppliesToDocNo { get; set; }
        public bool Open { get; set; }
        public DateOnly DueDate { get; set; }
        public bool Apiitive { get; set; }
        public int ClosedByEntryNo { get; set; }
        public string? AppliesToId { get; set; }
        public string JournalBatchName { get; set; } = "";
        public GenJournalAccountType BalAccountType { get; set; }
        public string BalAccountNo { get; set; } = "";
        public DateOnly DocumentDate { get; set; }
        public string ExternalDocumentNo { get; set; } = "";
        public decimal AmountToApply { get; set; }
        public bool ApplyingEntry { get; set; }
        public bool Reversed { get; set; }
        public bool Prepayment { get; set; }
        public string? PaymentMethodCode { get; set; }
        public string? AppliesToExtDocNo { get; set; }







    }
}