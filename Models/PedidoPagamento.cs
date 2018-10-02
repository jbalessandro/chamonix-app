using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class PedidoPagamento
    {
        [Key]
        public int PedidoId { get; set; }
        public int FormaPgtoId { get; set; }
        public decimal Valor { get; set; }
        public bool ServicoAceito { get; set; }
    }
}