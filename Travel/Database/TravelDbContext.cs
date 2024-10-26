using Microsoft.EntityFrameworkCore;
using Travel.Models;

namespace Travel.Database
{
    public class TravelDbContext : DbContext
    {
        public TravelDbContext(DbContextOptions<TravelDbContext> options) : base(options)
        {

        }
        public DbSet<PersonalDetails> PersonalDetails { get; set; }
        public DbSet<LoginDetails> LoginDetails { get; set; }
        public DbSet<CountryDetails> CountryDetails { get; set; }
        public DbSet<CityDetails> CityDetails { get; set; }
        public DbSet<CurrencyDetails> CurrencyDetails { get; set; }
        public DbSet<DiscountDetails> DiscountDetails { get; set; }
        public DbSet<MainTripDetails> MainTripDetails { get; set; }
        public DbSet<TripDetails> TripDetails { get; set; }
        public DbSet<MainPersonalDetails> MainPersonalDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder obj)
        {
            obj.Entity<MainTripDetails>()
                .HasOne(a => a.CountryDetails)
                .WithMany().HasForeignKey(a => a.CountryId);
            obj.Entity<MainTripDetails>()
                .HasOne(b => b.CityDetails)
                .WithMany().HasForeignKey(b => b.CityId);
            obj.Entity<MainTripDetails>()
                .HasOne(c => c.CurrencyDetails)
                .WithMany().HasForeignKey(c => c.CurrencyId);
            obj.Entity<MainTripDetails>()
                .HasOne(d => d.DiscountDetails)
                .WithMany().HasForeignKey(d => d.DiscountId);
            obj.Entity<MainPersonalDetails>()
                .HasOne(x => x.LoginDetails)
                .WithMany().HasForeignKey(x => x.Id);


        }
    }
}
