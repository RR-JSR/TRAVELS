using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class CityDetails
    {
        [Key]
        public int CityId { get; set; }
        public string CityName { get; set; }
    }
}
