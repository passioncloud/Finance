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
public class ItemController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<Item> GetItems(string search = "")
    {
        return apiDbContext.Items
        .Where(c => 
            EF.Functions.Like(c.Name, $"%{search}%")            
        )
          .OrderBy(item => item.Name);
    }

    [HttpGet]
    [Route("{Id}")]
    public async Task<Item> GetItem(int Id)
    {
        Item? item = await apiDbContext.Items.FindAsync(Id);
        if (item == default) throw new Exception($"Item ${Id} Not Found");
        return item;
    }

    [HttpPost]
    public async Task<Item> CreateItem(CreateItemDto createItemDto)
    {
        Item item = createItemDto.CreateItem();
        apiDbContext.Items.Add(item);
        await apiDbContext.SaveChangesAsync();
        item = (await apiDbContext.Items.FindAsync(item.Id))!;
        return item;
    }

    [HttpPatch]
    [Route("{Id}")]
    public Item UpdateItem(string Id, UpdateItemDto updateItemDto)
    {
        Item item = updateItemDto.UpdateItem(apiDbContext);
        apiDbContext.SaveChanges();
        return apiDbContext.Items.Find(item.Id)!;
    }

    [HttpDelete]
    [Route("{Id}")]
    public async Task<NoContentResult> DeleteItem(int Id)
    {
        Item? item = await apiDbContext.Items.FindAsync(Id);
        if (item == default) throw new Exception($"Item ${Id} Not Found");
        apiDbContext.Items.Remove(item);
        await apiDbContext.SaveChangesAsync();
        return NoContent();
    }

}