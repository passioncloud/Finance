using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Services;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ReportController(ApiDbContext apiDbContext, PostedInvoiceReportService postedInvoiceReportService) : ControllerBase
{



    [Route("PostedInvoiceReport/{InvoiceNo}")]
    [HttpGet]
    public ActionResult PostedInvoiceReport(string InvoiceNo)
    {
        byte[] invoicePdf = postedInvoiceReportService.GenerateReport(InvoiceNo);
        return File(invoicePdf, "application/octet-stream", $"Report {InvoiceNo}.pdf");
    }

}