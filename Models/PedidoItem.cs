using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class PedidoItem
    {
        [Key]
        public int PedidoItemId { get; set; }
        public int PedidoId { get; set; }
        public int ProdutoId { get; set; }
        public byte Quantidade { get; set; }
        public string Observacao { get; set; }
        public bool Ativo { get; set; }
        public int PedidoPor { get; set; }
        public int CanceladoPor { get; set; }
        public DateTime PedidoEm { get; set; }
        public decimal Preco { get; set; }
        public bool Servido { get; set; }
        public bool Cortesia { get; set; }

        public Pedido Pedido { get; set; }        
        public Produto Produto { get; set; }
    }
}