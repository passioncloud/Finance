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
    public IEnumerable<TModel> GetList()
    {
        return apiDbContext.GetDbSet<TModel>();
    }

      [HttpGet]
      [Route("{Id}")]
    public async Task<TModel> GetModel(Guid Id)
    {
        return await apiDbContext.GetDbSet<TModel>().FindAsync(Id);
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
    public async Task<TModel> PutModel(Guid Id, TModel model)
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
    public async Task Delete(Guid Id)
    {
        DbSet<TModel> dbSet = apiDbContext.GetDbSet<TModel>();
        TModel m = (await dbSet.FindAsync(Id))!;
        dbSet.Remove(m);
        await apiDbContext.SaveChangesAsync();
    }

}