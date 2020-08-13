using Microsoft.AspNetCore.Authentication;

namespace EasyAuth
{
    public class EasyAuthAuthenticationOptions : AuthenticationSchemeOptions
    {
        public EasyAuthAuthenticationOptions()
        {
            Events = new object();
        }
    }
}