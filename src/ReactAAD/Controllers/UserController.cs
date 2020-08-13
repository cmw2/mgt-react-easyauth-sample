using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactAAD.Controllers
{
    //[Authorize(AuthenticationSchemes = "EasyAuth")]
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            string idToken = this.Request.Headers["X-MS-TOKEN-AAD-ID-TOKEN"];
            string accessToken = this.Request.Headers["X-MS-TOKEN-AAD-ACCESS-TOKEN"];
            string expires = this.Request.Headers["X-MS-TOKEN-AAD-EXPIRES-ON"];
            string refreshToken = this.Request.Headers["X-MS-TOKEN-AAD-REFRESH-TOKEN"];

            return Ok(new { idToken, accessToken, expires, refreshToken });
        }

        [HttpGet("accesstoken")]
        public IActionResult GetAccessToken()
        {
            return Ok(this.Request.Headers["X-MS-TOKEN-AAD-ACCESS-TOKEN"][0]);
        }
    }
}

