using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SelectaAutomat.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Selection { get; set; } = "";
        public double Credit { get; set; }

        public User()
        {

        }
    }
}
