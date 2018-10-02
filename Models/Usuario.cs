using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }
        [Required]
        public int CargoId { get; set; }
        [Required]
        public string Nome { get; set; }
        public string Telefone { get; set; }
        [Required]
        public bool Ativo { get; set; }
        public Cargo Cargo { get; set; }
    }
}