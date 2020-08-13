using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace EasyAuth
{
    public class MsClientPrincipal
    {
        [JsonPropertyName("auth_typ")]
        public string AuthenticationType { get; set; }
        [JsonPropertyName("claims")]
        public IEnumerable<UserClaim> Claims { get; set; }
        [JsonPropertyName("name_typ")]
        public string NameType { get; set; }
        [JsonPropertyName("role_typ")]
        public string RoleType { get; set; }
    }
}