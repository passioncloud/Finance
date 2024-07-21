using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Api;
using Microsoft.EntityFrameworkCore;
using Api.Extensions;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class ModelController<TModel>(ApiDbContext apiDbContext) : ControllerBase where TModel : Model
{
    [HttpGet]
    public IEnumerable<TModel> Get()
    {
        return apiDbContext.GetDbSet<TModel>();
    }


    [HttpPost]
    public async Task<TModel> CreateModel(TModel model)
    {
        DbSet<TModel> dbSet = apiDbContext.GetDbSet<TModel>();
        dbSet.Add(model);
        await apiDbContext.SaveChangesAsync();
        return await dbSet.OrderBy(m => m.Id).LastAsync();
    }


    [HttpPut]
    [Route("{Id}")]
    public async Task<TModel> PutModel(int Id, TModel model)
    {
        DbSet<TModel> dbSet = apiDbContext.GetDbSet<TModel>();
        TModel m = await dbSet.FindAsync(Id);
        // perform update 
        //

        await apiDbContext.SaveChangesAsync();
        return (await dbSet.FindAsync(Id))!;
    }

    [HttpDelete]
    [Route("{Id}")]
    public async Task Delete(int Id)
    {
        DbSet<TModel> dbSet = apiDbContext.GetDbSet<TModel>();
        TModel m = await dbSet.FindAsync(Id);
        dbSet.Remove(m);
        await apiDbContext.SaveChangesAsync();
    }

}