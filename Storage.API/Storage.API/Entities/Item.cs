using System.ComponentModel.DataAnnotations;

namespace Storage.API.Entities
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int Amount { get; set; }
        public int Value { get; set; }
    }
}
