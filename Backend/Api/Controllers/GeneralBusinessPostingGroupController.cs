using Api.Models;

namespace Api.Controllers;


public class GeneralBusinessPostingGroupController(ApiDbContext apiDbContext) : ModelController<GeneralBusinessPostingGroup>(apiDbContext)
{
}