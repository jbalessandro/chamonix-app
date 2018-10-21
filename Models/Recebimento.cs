using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Recebimento
    {
        [Key]
        public DateTime DtRecebimento { get; set; }
        public string Descricao { get; set; }
        public decimal Valor { get; set; }
        public decimal Taxa { get; set; }
        public decimal ValorOperadora { get; set; }
        public decimal Liquido { get; set; }
    }
}