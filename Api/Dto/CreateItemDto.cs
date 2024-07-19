using Api.Models;

namespace Api.Dto;

public class CreateItemDto 
{
    public string Name { get;set; }
     public decimal Price { get;set;}
    public decimal Cost { get;set;}

    public Item CreateItem()
    {
        return new()
        {
            Name = Name,
            Price = Price,
            Cost = Cost,
            CreatedAt = DateTime.Now,
            CreatedBy = "ADMIN",
            UpdatedAt = DateTime.Now,
            UpdatedBy = "ADMIN"
        };
    }
}


