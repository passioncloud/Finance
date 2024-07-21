using Api.Models;

namespace Api.Controllers;

public class GenJournalLineController(ApiDbContext apiDbContext) : ModelController<GenJournalLine>(apiDbContext)
{
}