using Api.Models;

namespace Api.Dto;

public class UpdateCustomerDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string PhoneNo { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string TIN { get; set; } = "";

    public Customer UpdateCustomer(ApiDbContext dbContext)
    {
        Customer customer = dbContext.Customers.Find(Id) ?? throw new Exception($"No customer found with Id {Id}");
        Name = Name;
        Email = Email;
        PhoneNo = PhoneNo;
        Address = Address;
        TIN = TIN;
        customer.UpdatedBy = "ADMIN";
        customer.UpdatedAt = DateTime.Now;
        return customer;
    }
}


