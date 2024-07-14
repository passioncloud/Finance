using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Dto;
// using Api.Models;

namespace Api.Controllers;

// [Authorize]
[ApiController]
[Route("[controller]")]
public class CustomerController(ApiDbContext apiDbContext) : ControllerBase
{

    [HttpGet]
    public IEnumerable<Customer> GetCustomers()
    {
        return apiDbContext.Customers.OrderBy(customer => customer.Name);
    }

    [HttpGet]
    [Route("{Id}")]
    public async Task<Customer> GetCustomer(int Id)
    {
        Customer? customer = await apiDbContext.Customers.FindAsync(Id);
        if(customer == default) throw new Exception($"Customer ${Id} Not Found");
        return customer;
    }

    [HttpPost]
    public async Task<Customer> CreateCustomer(CreateCustomerDto createCustomerDto)
    {
        Customer customer = createCustomerDto.CreateCustomer();
        apiDbContext.Customers.Add(customer);
        await apiDbContext.SaveChangesAsync();
        customer = (await apiDbContext.Customers.FindAsync(customer.Id))!;
        return customer;
    }

    [HttpPatch]
    [Route("{Id}")]
    public Customer UpdateCustomer(string Id, UpdateCustomerDto updateCustomerDto)
    {
        Customer customer = updateCustomerDto.UpdateCustomer(apiDbContext);
        apiDbContext.SaveChanges();
        return apiDbContext.Customers.Find(customer.Id)!;
    }

    [HttpDelete]
    [Route("{Id}")]
    public async Task<NoContentResult> DeleteCustomer(string Id)
    {
        Customer? customer = await apiDbContext.Customers.FindAsync(Id);
        if(customer == default) throw new Exception($"Customer ${Id} Not Found");
        apiDbContext.Customers.Remove(customer);
        await apiDbContext.SaveChangesAsync();
        return NoContent();
    }

}