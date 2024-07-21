
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Api.Authentication;

namespace Api.Controllers;


/// <summary>
/// To learn about authentication see: https://www.c-sharpcorner.com/article/authentication-and-authorization-in-asp-net-core-web-api-with-json-web-tokens/
/// </summary>
/// <param name="userManager"></param>
/// <param name="roleManager"></param>
/// <param name="configuration"></param>
[Route("[controller]")]
[ApiController]
public class AuthenticateController(UserManager<ApplicationUser> userManager,
    RoleManager<IdentityRole> roleManager,
    IConfiguration configuration) : ControllerBase
{

    [HttpPost]
    [Route("Login")]
    public async Task<ActionResult> Login([FromBody] LoginModel model)
    {
        ApplicationUser user = await userManager.FindByNameAsync(model.Username);
        if (user == null)
        {
            return NotFound("No user found with username " + model.Username);
        }
        bool passwordMatches = await userManager.CheckPasswordAsync(user, model.Password);
        if (!passwordMatches)
        {
            return Unauthorized("Wrong password for user " + model.Username);
        }
        var userRoles = await userManager.GetRolesAsync(user);
        var authClaims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };
        foreach (var userRole in userRoles)
        {
            authClaims.Add(new Claim(ClaimTypes.Role, userRole));
        }
        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]));
        var token = new JwtSecurityToken(
            issuer: configuration["JWT:ValidIssuer"],
            audience: configuration["JWT:ValidAudience"],
            expires: DateTime.Now.AddDays(1),
            claims: authClaims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        );
        return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token),
            expiration = token.ValidTo
        });
    }

    [HttpPost]
    [Route("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        ApplicationUser existingUser = await userManager.FindByNameAsync(model.Username);
        if (existingUser != null)
        {
            return StatusCode(StatusCodes.Status409Conflict, new Response
            {
                Status = "Error registering user",
                Message = $"User {model.Username} already exists"
            });
        }
        ApplicationUser user = new ApplicationUser()
        {
            Email = model.Email,
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = model.Username,
            PhoneNumber = model.PhoneNumber
        };
        var result = await userManager.CreateAsync(user, model.Password);
        if (!result.Succeeded)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, result);
            // return StatusCode(StatusCodes.Status500InternalServerError, new Response
            // {
            //     Status = "Error",
            //     Message = "User creation failed"
            // });
        }
        if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
            await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));

        if (!await roleManager.RoleExistsAsync(UserRoles.User))
            await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

        await userManager.AddToRoleAsync(user, UserRoles.User);
        await userManager.AddToRoleAsync(user, UserRoles.Admin);
        return Ok(new Response
        {
            Status = "Success",
            Message = "User created"
        });
    }

}