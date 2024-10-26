using System.ComponentModel.DataAnnotations;
namespace Travel.Models
{
    public class PersonalDetails
    {
        [Key]
        public int Id { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public float Phone { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Profession { get; set; }

    }
}
