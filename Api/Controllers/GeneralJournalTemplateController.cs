using Api.Models;

namespace Api.Controllers;


public class GeneralJournalTemplateController(ApiDbContext apiDbContext) : ModelController<GeneralJournalTemplate>(apiDbContext)
{
}