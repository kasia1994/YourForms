using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourForms.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Gender { get; set; }
        public Nationalities Nationality { get; set; }
        public string Phone { get; set; }
        public string EmailAdress { get; set; }
        public bool IsActive { get; set; }

        public enum Nationalities
        {
            Poland=1,
            France=2,
            GreatBritain=3,
            Hungary=4,
            Russia=5,
            Germany=6,
            Italy=7



        }


    }
}
