using System.ComponentModel.DataAnnotations.Schema;
using Api;
using Api.Models;

namespace Api.Models;

public class ItemLedgerEntry : Model
{
    public string DocumentType { get; set; }
    public string EntryType { get; set; }
    public string DocumentNo { get; set; }
    public DateTime PostingDate { get; set; } = DateTime.Now.Date;
    [ForeignKey(nameof(Item))]
    public string ItemNo { get; set; }
    public string ItemDescription { get; set; }
    public decimal Quantity { get; set; }
    public decimal Amount { get; set; }
    public string Description { get; set; } = "";
    public bool Open { get; set; }
    public string CreatedBy { get;set;}

    public Item? Item { get; set; }

    public void OnModify(ApiDbContext apiDbContext)
    {
    }
}