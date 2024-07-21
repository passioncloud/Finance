using Api.Models;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

public class GeneralJournalLineController(ApiDbContext apiDbContext) : ModelController<GeneralJournalLine>(apiDbContext)
{

    [HttpPost]
    [Route("{Id}/PostJournalLine")]
    public int PostJournalLine(Guid Id)
    {
        GenJnlPostLine genJnlPostLine = new GenJnlPostLine(apiDbContext);
        GeneralJournalLine journalLine = apiDbContext.GenJournalLines.OrderBy(g => g.LineNo).Last();
        int result = genJnlPostLine.RunWithoutCheck(journalLine);
        apiDbContext.SaveChanges();
        return result;
    }
}