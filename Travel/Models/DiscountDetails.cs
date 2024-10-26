using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class DiscountDetails
    {
        [Key]
        public int DiscountId { get; set; }
        public int DiscountPercentage { get; set; }
        public string DiscountName { get; set; }
    }
}
