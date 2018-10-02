using System.Collections.Generic;

namespace chamonix.Models
{
    public class Conta
    {
        public Pedido Pedido { get; set; }
        public IEnumerable<ContaConsumo> ContaConsumo { get; set; }
    }
}