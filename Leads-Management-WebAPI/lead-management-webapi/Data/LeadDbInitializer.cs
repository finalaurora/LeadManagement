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

            context.Database.EnsureDeleted();

            context.Database.EnsureCreated();

            var leads = new Lead[]
            {
                new Lead{FirstName="Eric", LastName="Cantona", Email="ericcantona@gmail.com" , Phone="123-478-4894", Source="http://findnewhome.com", Status = RentalStatus.LookingForRental, CreatedDate =DateTime.Today, UpdatedDate= DateTime.Today.AddDays(1)},
                new Lead{FirstName="Json", LastName="Statham", Email="jstatham@gmail.com" , Phone="949-198-4166", Source="http://exotic-villas.com", Status = RentalStatus.Rented, CreatedDate =DateTime.Today.AddDays(2) , UpdatedDate= DateTime.Today.AddDays(3)},
                new Lead{FirstName="Scott", LastName="Fitch", Email="scottf@gmail.com", Phone="144-342-5433", Source="http://findnewhome.com", Status = RentalStatus.LookingForRental, CreatedDate =DateTime.Today.AddDays(2), UpdatedDate= DateTime.Today.AddDays(4)},
                new Lead{FirstName="Carl", LastName="Gustav", Email="carlgustav@gmail.com", Phone="785-894-3624", Source="http://navi-realestate.com", Status = RentalStatus.DoNotCall, CreatedDate =DateTime.Today.AddDays(3), UpdatedDate= DateTime.Today.AddDays(4)}
            };
            foreach(Lead l in leads)
            {
                    context.Leads.AddAsync(l);
            }
            context.SaveChanges();
        }
    }
}
