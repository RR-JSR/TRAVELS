using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class MainTripDetails
    {
        [Key]
        public int TripId { get; set; }
        public string Fname { get; set;}
        public int ID { get; set; }
        public int CountryId { get; set; }
        public int CityId { get; set; }
        public int NoOfDays { get; set; }
        public int TotalPersons { get; set; }
        public string FoodChoice { get; set; }
        public int CurrencyId { get; set; }
        public float EstimatedCost { get; set; }
        public int DiscountId { get; set; }
        public float TotalCost { get; set; }
        public CityDetails CityDetails { get; set; }
        public CountryDetails CountryDetails { get; set; }
        public CurrencyDetails CurrencyDetails { get; set; }
        public DiscountDetails DiscountDetails { get; set; }
    }
}
