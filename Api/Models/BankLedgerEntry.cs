using System.ComponentModel.DataAnnotations.Schema;
using Api;
using Api.Authentication;
using Api.Models;

namespace Api.Models;

public class BankLedgerEntry : Model
{    public string DocumentNo { get; set; }
    public DateTime PostingDate { get; set; } = DateTime.Now.Date;

    [ForeignKey(nameof(Bank))]
    public string BankNo { get; set; }
    public string BankName { get; set; }
    public decimal Amount { get; set; }
    public string Description { get; set; } = "";
    public bool Open { get; set; }


    public string CreatedBy { get; set; }


    public Bank? Bank { get; set; }

    public void OnModify(ApiDbContext apiDbContext)
    {
    }


}