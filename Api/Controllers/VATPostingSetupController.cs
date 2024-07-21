using Api.Models;

namespace Api.Controllers;


public class VATPostingSetupController(ApiDbContext apiDbContext) : ModelController<VATPostingSetup>(apiDbContext)
{
}