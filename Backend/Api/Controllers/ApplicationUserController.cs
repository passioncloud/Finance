using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Api;
using Api.Authentication;
using Api.Models;
using Api.Services;

namespace Api.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ApplicationUserController(ApiDbContext apiDbContext) : ControllerBase
{

    // [HttpPost]
    // public ApplicationUser Post(string OrderNo)
    // {
    //     ApplicationUser applicationUser = postOrderService.PostOrder(OrderNo);
    //     return applicationUser;
    // }


    [HttpGet]
    public IEnumerable<ApplicationUser> Get()
    {
        return apiDbContext.Users;
    }

    [Route("{UserName}")]
    [HttpGet]
    public ApplicationUser GetApplicationUser(string UserName)
    {
        return apiDbContext.Users.Single(u => u.UserName == UserName);
    }

    [Route("{UserName}")]
    [HttpPatch]
    public ApplicationUser PatchApplicationUser(string UserName, [FromBody] ApplicationUser delta)
    {
        Console.WriteLine("Patching");
        ApplicationUser user = apiDbContext.Users.Single(u => u.UserName == UserName);
        if (delta.Email != null)
        {
            user.Email = delta.Email;
            user.NormalizedEmail = delta.Email.ToUpper();
        }
        if (delta.PhoneNumber != null)
            user.PhoneNumber = delta.PhoneNumber;
        
        apiDbContext.SaveChanges();
        return user;
    }

    public record NameChange(string Email);
}