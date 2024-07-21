// using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.OData.Deltas;
// using Microsoft.AspNetCore.OData.Formatter;
// using Microsoft.AspNetCore.OData.Query;
// using Microsoft.AspNetCore.OData.Routing.Controllers;
// using Api;
// using Api.Models;
// using Api.Services;



// namespace Api.Controllers;

// public class BankLedgerEntryController(ApiDbContext apiDbContext, NoSeriesService noSeriesService) : ODataController
// {

//     [EnableQuery]
//     public ActionResult<IEnumerable<BankLedgerEntry>> Get()
//     {
//         return Ok(apiDbContext.BankLedgerEntries);
//     }



// }