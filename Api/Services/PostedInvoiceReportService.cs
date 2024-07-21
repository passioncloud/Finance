using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Reporting.NETCore;
using Api;
using Api.Models;

public class PostedInvoiceReportService(ApiDbContext apiDbContext)
{
    public byte[] GenerateReport(string InvoiceNo)
    {
        string fileDirPath = "D:/Passioncloud/Projects/sales/backend/Sales/Reports";
        string rdlFilePath = fileDirPath + "/" + "PostedSalesInvoice.rdl";
        FileStream reportDefinition = File.OpenRead(rdlFilePath);
        LocalReport report = new LocalReport();
        report.LoadReportDefinition(reportDefinition);
        ReportParameter reportParameter1 = new ReportParameter("InvoiceNo", InvoiceNo);
        report.SetParameters([reportParameter1]);
        // Invoice invoice = apiDbContext.Invoices
        //     .Include(i => i.InvoiceLines)
        //     .Single(i => i.No == InvoiceNo);
        // ReportDataSource InvoiceHeader = new()
        // {
        //     Name = "InvoiceHeader",
        //     Value = new[] { invoice }
        // };
        // report.DataSources.Add(InvoiceHeader);
        // ReportDataSource InvoiceLines = new()
        // {
        //     Name = "InvoiceLines",
        //     Value = invoice.InvoiceLines
        // };
        // report.DataSources.Add(InvoiceLines);
        byte[] result = report.Render("PDF");
        return result;
    }



}