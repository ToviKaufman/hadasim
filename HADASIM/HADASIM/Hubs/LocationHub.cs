using Microsoft.AspNetCore.SignalR;

public class LocationHub : Hub
{
    public async Task SendLocation(object location)
    {
        await Clients.All.SendAsync("ReceiveLocation", location);
    }
}