using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using Api;
using Api.Authentication;
using Api.Models;

namespace Api.Models;

public class CashReceiptJournalLine : Model
{
    public string DocumentType { get; set; } = "Cash Receipt";
    public string DocumentNo { get; set; } = "";

    [ForeignKey(nameof(Customer))]
    public string? CustomerNo { get; set; }
    public string? CustomerName { get; set; }


    [ForeignKey(nameof(Bank))]
    public string? BankNo { get; set; }
    public string? BankName { get; set; }

    public DateTime PostingDate { get; set; } = DateTime.Now.Date;
    public decimal Amount { get; set; }
    public string Description { get; set; } = "";


    public string CreatedBy { get; set; }


    public void OnModify(ApiDbContext apiDbContext)
    {
    }

    public Customer? Customer { get; set; }

    public Bank? Bank { get; set; }
}