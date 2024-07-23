using Api.Models;

namespace Api.Controllers;

public class VATProductPostingGroupController(ApiDbContext apiDbContext) : ModelController<VATProductPostingGroup>(apiDbContext)
{
}