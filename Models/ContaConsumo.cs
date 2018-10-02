using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class ContaConsumo
    {
        [Key]
        public Int64 Item { get; set; }
        public string Tipo { get; set; }
        public int Quantidade { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public decimal Total { get; set; }
    }
}