using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mini_Project.Models;
using Mini_Project.Service;

namespace Mini_Project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly TokenService _tokenService;

        public LoginController(TokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [HttpPost]
        public IActionResult Login([FromBody] UserLogin login)
        {
            // Hardcoded user validation - replace with DB in real app
            if (login.UserId == "admin" && login.Password == "admin")
            {
                var token = _tokenService.GenerateToken(login.UserId);
                return Ok(new { token });
            }
            return Unauthorized();
        }
    }

}
