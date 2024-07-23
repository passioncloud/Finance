using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Dto;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
// using Api.Models;

namespace Api.Controllers;

// [Authorize]
[ApiController]
[Route("[controller]")]
public class ApiInvoiceController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<SalesHeader> GetApiInvoices(string search = "")
    {
        return apiDbContext.SalesHeaders
        .Where(c => 
            EF.Functions.Like(c.CustomerName, $"%{search}%") ||
            EF.Functions.Like(c.Description, $"%{search}%") ||
            EF.Functions.Like(c.ExternalDocumentNo, $"%{search}%")  
        )
          .OrderBy(salesHeader => salesHeader.Id);
    }

    // [HttpGet]
    // [Route("{Id}")]
    // public async Task<ApiInvoice> GetApiInvoice(int Id)
    // {
    //     ApiInvoice? salesInvoice = await apiDbContext.ApiInvoices.FindAsync(Id);
    //     if (salesInvoice == default) throw new Exception($"ApiInvoice ${Id} Not Found");
    //     return salesInvoice;
    // }

    [HttpPost]
    public async Task<SalesHeader> CreateApiInvoice(CreateApiInvoiceDto createApiInvoiceDto)
    {
        SalesHeader salesHeader = createApiInvoiceDto.CreateApiInvoice();
        apiDbContext.SalesHeaders.Add(salesHeader);
        await apiDbContext.SaveChangesAsync();
        return salesHeader;
    }

    // [HttpPatch]
    // [Route("{Id}")]
    // public ApiInvoice UpdateApiInvoice(string Id, UpdateApiInvoiceDto updateApiInvoiceDto)
    // {
    //     ApiInvoice salesInvoice = updateApiInvoiceDto.UpdateApiInvoice(apiDbContext);
    //     apiDbContext.SaveChanges();
    //     return apiDbContext.ApiInvoices.Find(salesInvoice.Id)!;
    // }

    // [HttpDelete]
    // [Route("{Id}")]
    // public async Task<NoContentResult> DeleteApiInvoice(int Id)
    // {
    //     ApiInvoice? salesInvoice = await apiDbContext.ApiInvoices.FindAsync(Id);
    //     if (salesInvoice == default) throw new Exception($"ApiInvoice ${Id} Not Found");
    //     apiDbContext.ApiInvoices.Remove(salesInvoice);
    //     await apiDbContext.SaveChangesAsync();
    //     return NoContent();
    // }

}