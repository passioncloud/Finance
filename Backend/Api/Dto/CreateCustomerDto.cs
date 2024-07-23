using Api.Models;

namespace Api.Dto;

public class CreateCustomerDto 
{
    public string Name { get;set; }
    public string PhoneNo { get;set;}
    public string Email { get;set;}
    public string Address { get;set;}
    public string TIN { get;set; } = "";

    public Customer CreateCustomer()
    {
        return new()
        {
            Name = Name,
            Email = Email,
            PhoneNo = PhoneNo,
            Address = Address,
            TIN = TIN,
            CreatedAt = DateTime.Now,
            CreatedBy = "ADMIN",
            UpdatedAt = DateTime.Now,
            UpdatedBy = "ADMIN"
        };
    }
}


