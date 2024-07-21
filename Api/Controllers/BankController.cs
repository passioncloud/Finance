// using Microsoft.AspNetCore.Mvc;
// using Api;
// using Api.Models;
// using Api.Services;



// namespace Api.Controllers;

// public class BankController(ApiDbContext apiDbContext, NoSeriesService noSeriesService) : ODataController
// {

//     [EnableQuery]
//     public ActionResult<IEnumerable<Bank>> Get()
//     {
//         return Ok(apiDbContext.Banks);
//     }

//     [EnableQuery]
//     public ActionResult<Bank> Get([FromRoute] string key)
//     {
//         var item = apiDbContext.Banks.SingleOrDefault(c => c.No == key);
//         if (item == null) return NotFound();
//         return Ok(item);
//     }

//     [HttpPost]
//     public ActionResult<Bank> PostBank([FromBody] Delta<Bank>? delta)
//     {
//         string nextBankNo = noSeriesService.NextNo(nameof(Bank));
//         var bank = new Bank
//         {
//             No = nextBankNo
//         };
//         delta?.Patch(bank);
//         apiDbContext.Banks.Add(bank);
//         apiDbContext.SaveChanges();
//         return Created(bank);
//     }

//     /// <summary>
//     /// Update the bank record
//     /// </summary>
//     /// <param name="key">This field should always read key. If you name it something else like id, no etc the HTTP method wont work. You'll get 
//     /// an error like 404 or 405
//     /// </param>
//     /// <param name="delta"></param>
//     /// <returns></returns>
//     [HttpPatch]
//     [EnableQuery]
//     public ActionResult Patch([FromRoute] string key, [FromBody] Delta<Bank> delta)
//     {
//         var bank = apiDbContext.Banks.SingleOrDefault(c => c.No == key);
//         if (bank == null) return NotFound();
//         delta.Patch(bank);
//         apiDbContext.SaveChanges();
//         return Ok(bank);
//     }

//      [HttpDelete]
//     public ActionResult Delete([FromRoute] string key)    {
//         var bank = apiDbContext.Banks.SingleOrDefault(c => c.No == key);
//         if (bank == null) return NotFound();
//         apiDbContext.Banks.Remove(bank);
//         apiDbContext.SaveChanges();
//         return NoContent();
//     }
// }