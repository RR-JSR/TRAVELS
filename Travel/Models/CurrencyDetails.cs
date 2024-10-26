using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class CurrencyDetails
    {
        [Key]
        public int CurrencyId { get; set; }
        public string CurrencyName { get; set; }
    }
}
