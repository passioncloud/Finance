using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Services;

namespace Api.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class PostController(ApiDbContext apiDbContext 
//, 
// PostOrderService postOrderService,
// PostCashReceiptJournalService postCashReceiptJournalService
) : ControllerBase
{



    /// <summary>
    /// eg localhost:5000/Post/PostOrder/ORD0001
    /// </summary>
    /// <param name="OrderNo"></param>
    /// <returns></returns>
    // [Route("PostOrder/{OrderNo}")]
    // [HttpPost]
    // public Invoice PostOrder(string OrderNo)
    // {
    //     Invoice invoice = postOrderService.PostOrder(OrderNo);
    //     return invoice;
    // }




    /// <summary>
    /// eg localhost:5000/Post/PostCashReceiptJournal
    /// </summary>
    /// <param name="OrderNo"></param>
    /// <returns></returns>
    // [Route("PostCashReceiptJournal")]
    // [HttpPost]
    // public void PostCashReceiptJournal()
    // {
    //    postCashReceiptJournalService.PostCashReceiptJournal();
    // }


}