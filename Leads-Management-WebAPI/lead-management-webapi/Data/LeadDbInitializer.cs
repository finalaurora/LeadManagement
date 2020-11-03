using LeadManageAPI.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeadManageAPI.Data
{
    public static class LeadDbInitializer
    {
        public static void Initialize(IApplicationBuilder app)
        {
            LeadContext context = app.ApplicationServices.CreateScope().ServiceProvider.GetRequiredService<LeadContext>();
            context.Database.EnsureCreated();
            if (context.Database.GetPendingMigrations().Any())
            {
                context.Database.Migrate();
            }

            var leads = new Lead[]
            {
                new Lead{Id = 1, FirstName="Eric", LastName="Cantona", Email="ericcantona@gmail.com" , Phone="123-478-4894", Source="http://findnewhome.com", Status = RentalStatus.LookingForRental ,CreatedDate =DateTime.Now , UpdatedDate= DateTime.Now},
                new Lead{Id = 2, FirstName="Json", LastName="Statham", Email="jstatham@gmail.com" , Phone="949-198-4166", Source="http://exotic-villas.com", Status = RentalStatus.Rented ,CreatedDate =DateTime.Now , UpdatedDate= DateTime.Now},
                new Lead{Id = 3, FirstName="Scott", LastName="Fitch", Email="scottf@gmail.com" , Phone="144-342-5433", Source="http://findnewhome.com", Status = RentalStatus.LookingForRental ,CreatedDate =DateTime.Now , UpdatedDate= DateTime.Now}
            };

            foreach(Lead lead in leads)
            {
                context.Leads.Add(lead);
            }
            context.SaveChanges();
        }
    }
}
