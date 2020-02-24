using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SelectaAutomat.Models
{
    public class SelectaMachineItem
    {
        public double Price { get; set; }
        public int Index { get; set; }
        public int Level { get; set; }
        public string Name { get; }
        public string Img { get; set; }

        public SelectaMachineItem(double price, int index, int level, string name, string img)
        {
            this.Price = price;
            this.Index = index;
            this.Level = level;
            this.Name = name;
            this.Img = img;
        }
    }
}
