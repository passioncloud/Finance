using Api.Models;

namespace Api.Controllers;


public class GLAccountController(ApiDbContext apiDbContext) : ModelController<GLAccount>(apiDbContext)
{
}