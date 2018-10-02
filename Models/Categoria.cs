using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Categoria
    {
        [Key]
        public int CategoriaId { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public bool Cardapio { get; set; }
        [Required]
        public bool Ativo { get; set; }
        [Required]
        public DateTime AlteradoEm { get; set; }
    }
}