using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class Customer
{
    [Key]
    public int Id { get;set;}
    public string Name { get;set;}
    public string Email { get;set;}
    public string PhoneNo { get;set;}
    public string Address { get;set;}
    public string TIN { get;set;}
    public string CreatedBy { get;set; }
    public DateTime CreatedAt { get;set; }
    public string UpdatedBy { get;set;}
    public DateTime UpdatedAt { get;set; }
}


