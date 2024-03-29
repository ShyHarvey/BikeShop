namespace BikeShop.Identity.Application.Exceptions;

public class RefreshTokenException : Exception, IException
{
    public string? Error { get; set; }
    public string? ErrorDescription { get; set; } = string.Empty;

    public RefreshTokenException(string message) : base(message) {}
}