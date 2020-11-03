using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeadManageAPI.Model
{
    public class LeadContext : DbContext
    {
        public LeadContext()
        {
        }

        public LeadContext(DbContextOptions options) :base (options)
        {
        }

        public DbSet<Lead> Leads { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Lead>().ToTable("Lead");
        }
    }
}
