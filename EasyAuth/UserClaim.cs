using System.Text.Json.Serialization;

public class UserClaim
{
    [JsonPropertyName("typ")]
    public string Type { get; set; }
    [JsonPropertyName("val")]
    public string Value { get; set; }
}
