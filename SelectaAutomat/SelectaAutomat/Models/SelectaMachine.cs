
using SelectaAutomat.Models;
using System.Collections.Generic;

public class SelectaMachine
{
    public List<SelectaMachineItem> Items { get; set; }
    public SelectaMachineItem SelectedItem { get; set; }
    public SelectaMachine(List<SelectaMachineItem> items)
    {
        this.Items = items;
    }
}