using Api.Enums;
using Api.Models;

namespace Api.Dto;

public class CreateApiInvoiceDto
{
    public string CustomerName { get; set; }
    public string Description { get; set; }
    public string ExternalDocumentNo { get;set; }
    public DateTime PostingDate { get; set; }


    public SalesHeader CreateApiInvoice()
    {
        return new()
        {
            DocumentType = SalesDocumentType.Customer,
            CustomerName = CustomerName,
            Description = Description,
            ExternalDocumentNo = ExternalDocumentNo,
            CreatedAt = DateTime.Now,
            CreatedBy = "ADMIN",
            UpdatedAt = DateTime.Now,
            UpdatedBy = "ADMIN"
        };
    }
}