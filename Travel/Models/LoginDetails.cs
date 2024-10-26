using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class LoginDetails
    {
        public string Fname { get; set; }

        [Key]
        public int Id { get; set; }
        public string Psd { get; set; }
    }
}
