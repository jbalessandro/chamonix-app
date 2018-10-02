using System;
using System.ComponentModel.DataAnnotations;

namespace chamonix.Models
{
    public class Produto
    {
        [Key]
        public int ProdutoId { get; set; }
        [Required]
        public int CategoriaId { get; set; }
        [Required]
        public string Descricao { get; set; }
        [Required]
        public string Detalhe { get; set; }
        [Required]
        public decimal ValorVenda { get; set; }
        [Required]
        public bool Ativo { get; set; }
        [Required]
        public DateTime AlteradoEm { get; set; }
        [Required]
        public bool ControleEstoque { get; set; }
        [Required]
        public int Estoque { get; set; }

        public Categoria Categoria { get; set; }
    }
}