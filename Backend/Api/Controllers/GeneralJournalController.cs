using System.Security.Principal;
using Microsoft.AspNetCore.Mvc;
using Api;
using Api.Models;
using Api.Services;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class GeneralJournalController : ControllerBase
{
    ApiDbContext _apiDbContext;
    string UserName;
    public GeneralJournalController(ApiDbContext apiDbContext)
    {
        _apiDbContext = apiDbContext;
        IIdentity user = User?.Identity;
        Console.WriteLine("**********************");
        Console.WriteLine("**********************");
        Console.WriteLine($"Username is {user?.Name}, authenticated: {user?.IsAuthenticated}");
        Console.WriteLine("**********************");
        Console.WriteLine("**********************");
        UserName = user?.Name ?? "No user found";
    }


    [HttpGet]
    public string GetUser()
    {
        return UserName;
    }

    [HttpPost]
    public int Post()
    {
        GeneralJournalPostLine genJnlPostLine = new GeneralJournalPostLine(_apiDbContext);
        GeneralJournalLine journalLine = _apiDbContext.GenJournalLines.OrderBy(g => g.LineNo).Last();
        int result = genJnlPostLine.RunWithoutCheck(journalLine);
        _apiDbContext.SaveChanges();
        return result;
    }



}