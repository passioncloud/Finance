using Api.Models;

namespace Api.Controllers;


public class GeneralJournalBatchController(ApiDbContext apiDbContext) : ModelController<GeneralJournalBatch>(apiDbContext)
{
}