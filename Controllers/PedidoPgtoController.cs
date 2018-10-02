using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using chamonix.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace chamonix.Controllers
{
    [Route("api/[controller]")]
    public class PedidoPgtoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public PedidoPgtoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("GetAll/{pedidoId}")]
        public IEnumerable<PedidoPgto> GetAll(int pedidoId)
        {
            return _db.PedidoPgto
                .Include(p => p.Pedido)
                .Include(f => f.FormaPgto)
                .Include(u => u.Usuario)
                .Where(x => x.PedidoId == pedidoId).ToList();
        }

        [HttpPost]
        public IActionResult Post([FromBody]PedidoPagamento PedidoPagamento)
        {
            var pedidoIn = new SqlParameter("@PedidoId", PedidoPagamento.PedidoId);
            var formaPgtoIn = new SqlParameter("@FormaPgtoId", PedidoPagamento.FormaPgtoId);
            var valorIn = new SqlParameter("@Valor", PedidoPagamento.Valor);
            var usuarioIn = new SqlParameter("@UsuarioId", 1); // TODO: usuario
            var servicoAceitoIn = new SqlParameter("@ServicoAceito", PedidoPagamento.PedidoId );

            var saldoOut = new SqlParameter();
            saldoOut.ParameterName = "@Saldo";
            saldoOut.Direction = ParameterDirection.Output;
            saldoOut.DbType = DbType.Decimal;

            _db.Database.ExecuteSqlCommand("PedidoPagamento @PedidoId, @FormaPgtoId, @Valor, @UsuarioId, @ServicoAceito, @Saldo OUT", pedidoIn, formaPgtoIn, valorIn, usuarioIn, servicoAceitoIn, saldoOut);
            return Ok(saldoOut.Value);
        }

        [HttpDelete("{pedidoPgtoId}")] 
        public IActionResult Delete(int pedidoPgtoId)
        {
            var pedidoPgtoIn = new SqlParameter("@PedidoPgtoId", pedidoPgtoId);
            var usuarioIn = new SqlParameter("@UsuarioId", 1); // TODO: usuario

            var saldoOut = new SqlParameter();
            saldoOut.ParameterName = "@Saldo";
            saldoOut.Direction = ParameterDirection.Output;
            saldoOut.DbType = DbType.Decimal;

            _db.Database.ExecuteSqlCommand("PedidoPagamentoExclusao @PedidoPgtoId, @UsuarioId, @Saldo OUT", pedidoPgtoIn, usuarioIn, saldoOut);
            return Ok(saldoOut.Value);
        }
    }
}