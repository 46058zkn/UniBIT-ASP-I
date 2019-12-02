using Microsoft.AspNetCore.Hosting;

[assembly: HostingStartup(typeof(E_Justice_Portal.Areas.Identity.IdentityHostingStartup))]

namespace E_Justice_Portal.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) =>
            {
            });
        }
    }
}