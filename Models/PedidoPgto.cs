using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class PedidoPgto
    {
        [Key]
        public int PedidoPgtoId { get; set; }
        public int PedidoId { get; set; }
        public int FormaPgtoId { get; set; }
        public decimal Valor { get; set; }
        public int UsuarioId { get; set; }
        public bool Ativo { get; set; }

        public Pedido Pedido { get; set; }
        public FormaPgto FormaPgto { get; set; }
        public Usuario Usuario { get; set; }
    }
}