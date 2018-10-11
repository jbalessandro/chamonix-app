using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Pedido
    {
        [Key]
        public int PedidoId { get; set; }       
        public int MesaId { get; set; }
        public DateTime Inicio { get; set; }
        public DateTime? Termino { get; set; }
        public int AbertaPor { get; set; }
        public int? FechadaPor { get; set; }
        public byte Clientes { get; set; }
        public decimal Consumo { get; set; }
        public decimal Servico { get; set; }    
        public decimal Total { get; set; }
        public decimal Pago { get; set; }
        public bool ServicoAceito { get; set; }
        public DateTime DataOperacao { get; set; }

        public Mesa Mesa  { get; set; }
    }
}