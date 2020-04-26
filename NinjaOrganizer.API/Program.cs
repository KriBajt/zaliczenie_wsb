using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using NinjaOrganizer.API.Contexts;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Web;

namespace NinjaOrganizer.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var logger = NLogBuilder
                    .ConfigureNLog("nlog.config")
                    .GetCurrentClassLogger();
            try
            {
                logger.Info("Initializing application...");
                var host = CreateWebHostBuilder(args).Build();

                using (var scope = host.Services.CreateScope())
                {
                    try
                    {
                        var context = scope.ServiceProvider.GetService<NinjaOrganizerContext>();

                        //context.Database.EnsureDeleted(); //for restore db to default value
                        context.Database.Migrate();
                    }
                    catch (Exception ex)
                    {
                        logger.Error(ex, "An error occurred while migrating the database.");
                    }
                }

                
                host.Run(); // run the web app
            }
            catch (Exception ex)
            {
                logger.Error(ex, "Application stopped because of exception.");
                throw;
            }
            finally
            {
                NLog.LogManager.Shutdown();
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseNLog();
    }
}
