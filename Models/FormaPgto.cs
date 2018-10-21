using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class FormaPgto
    {
        [Key]
        public int FormaPgtoId { get; set; }
        public string Descricao { get; set; }
        public bool Cartao { get; set; }
        public bool Ativo { get; set; }
        public int Prazo { get; set; }
        public bool Cortesia { get; set; }
        public decimal Taxa { get; set; }
    }
}