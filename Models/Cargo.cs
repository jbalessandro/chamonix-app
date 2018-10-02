using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Cargo
    {
        [Key]
        public int CargoId { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public bool Ativo { get; set; }
    }
}