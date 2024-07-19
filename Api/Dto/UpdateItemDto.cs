using Api.Models;

namespace Api.Dto;

public class UpdateItemDto
{
    public int Id { get; set; }
    public string Name { get; set; }
   public decimal Price { get;set;}
    public decimal Cost { get;set;}

    public Item UpdateItem(ApiDbContext dbContext)
    {
        Item item = dbContext.Items.Find(Id) ?? throw new Exception($"No item found with Id {Id}");
        item.Name = Name;
        item.Price = Price;
        item.Cost = Cost;
        item.UpdatedBy = "ADMIN";
        item.UpdatedAt = DateTime.Now;
        return item;
    }
}


