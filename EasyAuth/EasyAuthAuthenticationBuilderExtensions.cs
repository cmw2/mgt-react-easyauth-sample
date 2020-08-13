using Microsoft.AspNetCore.Authentication;
using System;

namespace EasyAuth
{
    public static class EasyAuthAuthenticationBuilderExtensions
    {
        public static AuthenticationBuilder AddEasyAuthAuthentication(
            this AuthenticationBuilder builder,
            Action<EasyAuthAuthenticationOptions> configure) =>
                builder.AddScheme<EasyAuthAuthenticationOptions, EasyAuthAuthenticationHandler>(
                    "EasyAuth",
                    "EasyAuth",
                    configure);
    }
}
