using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SelectaAutomat.Models
{
    public class SelectaService : ISelectaService
    {
        public List<User> Users { get; set; }
        public SelectaMachine Machine { get; set; }

        public SelectaService()
        {
            SelectaMachineItem nestea = new SelectaMachineItem(2.5, 12, 3, "Nestea", null);
            SelectaMachineItem coke = new SelectaMachineItem(3.5, 11, 2, "Coca Cola", null);
            SelectaMachineItem fanta = new SelectaMachineItem(2.5, 10, 5, "Fanta", null);
            List<SelectaMachineItem> items = new List<SelectaMachineItem>()
            {
                nestea,
                coke,
                fanta
            };

            SelectaMachine sm = new SelectaMachine(items);
            Machine = sm;
        }

        public User AddUser(User user)
        {
            user.Id = Users.Count;
            Users.Add(user);
            return user;
        }

        public User GetUser(int id)
        {
            return Users.Where(user => user.Id == id).First();
        }
    }
}
