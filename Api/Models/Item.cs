using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Item : Model
{
    public string Name { get;set;} = "";
    public decimal Price { get;set;}
    public decimal Cost { get;set;}
    public string CreatedBy { get;set; } = "";
    public DateTime CreatedAt { get;set; }
    public string UpdatedBy { get;set;}
    public DateTime UpdatedAt { get;set; }
}


