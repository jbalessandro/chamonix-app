using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class MesaPosicao
    {
        [Key]
        public int MesaId { get; set; }
        public string Descricao { get; set; }
        public byte Lugares { get; set; }
        public bool Disponivel { get; set; }
        public bool Ativo { get; set; }
        public DateTime? Inicio { get; set; }
        public byte Clientes { get; set; }
        public int PedidoId { get; set; }
    }
}