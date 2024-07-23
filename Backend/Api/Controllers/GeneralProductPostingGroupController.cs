using Api.Models;

namespace Api.Controllers;

public class GeneralProductPostingGroupController(ApiDbContext apiDbContext) : ModelController<GeneralProductPostingGroup>(apiDbContext)
{
}