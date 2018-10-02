using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Mesa
    {
        [Key]
        public int MesaId { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public byte Lugares { get; set; }
        [Required]
        public bool Disponivel { get; set; }
        [Required]
        public bool Ativo { get; set; }
    }
}