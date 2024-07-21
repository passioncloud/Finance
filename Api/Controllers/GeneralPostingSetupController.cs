using Api.Models;

namespace Api.Controllers;


public class GeneralPostingSetupController(ApiDbContext apiDbContext) : ModelController<GeneralPostingSetup>(apiDbContext)
{
}