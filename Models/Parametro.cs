using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Parametro
    {
        [Key]
        public int ParametroId { get; set; }
        public DateTime DataOperacao { get; set; }
    }
}