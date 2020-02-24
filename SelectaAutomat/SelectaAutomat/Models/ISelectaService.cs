using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SelectaAutomat.Models
{
    public interface ISelectaService
    {
        public List<User> Users { get; set; }
        public SelectaMachine Machine { get; set; }

        public User AddUser(User user);

        public User GetUser(int id);
    }
}
