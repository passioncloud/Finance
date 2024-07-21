using Api.Models;

namespace Api.Controllers;


public class VATBusinessPostingGroupController(ApiDbContext apiDbContext) : ModelController<VATBusinessPostingGroup>(apiDbContext)
{
}