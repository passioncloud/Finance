using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;

namespace Api.Models;

public class ApiHeader
{
    [Key]
    public int Id { get; set; }
    public SalesDocumentType DocumentType { get; set; }

    [ForeignKey(nameof(Customer))]
    public int CustomerId { get; set; }
    public string CustomerName { get; set; } = "";
    public DateTime PostingDate { get; set; }
    public string Description { get; set; } = "";
    public string ExternalDocumentNo { get; set; } = "";

    public string CreatedBy { get;set; } = "";
    public DateTime CreatedAt { get;set; }
    public string UpdatedBy { get;set;}
    public DateTime UpdatedAt { get;set; }

    
    public Customer? Customer { get; set; }

}