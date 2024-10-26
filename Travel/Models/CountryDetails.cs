using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class CountryDetails
    {
        [Key]
        public int CountryId { get; set; }
        public string CountryName { get; set; }
    }
}
