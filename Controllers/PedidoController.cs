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
    public class PedidoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public PedidoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet("{pedidoId}")]
        public Pedido Get(int pedidoId)
        {
            return _db.Pedido.Include(x => x.Mesa).Where(x => x.PedidoId == pedidoId).FirstOrDefault();
        }

        [HttpGet]
        [Route("GetPedido/{idMesa}")]
        public Pedido GetPedido(int idMesa)
        {
            return _db.Pedido.Include(x => x.Mesa).Where(x => x.MesaId == idMesa && x.FechadaPor == null).FirstOrDefault();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido pedido)
        {
            pedido.AbertaPor = 1; // TODO: usuario
            pedido.ServicoAceito = true;
            pedido.Inicio = DateTime.Now;
            var mesa = _db.Mesa.Where(x => x.MesaId == pedido.MesaId).FirstOrDefault();
            mesa.Disponivel = false;
            _db.Entry(mesa).State = EntityState.Modified;
            _db.Pedido.Add(pedido);            
            _db.SaveChanges();
            return Ok(pedido);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Pedido pedido)
        {
            _db.Entry(pedido).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(pedido);
        }

        [HttpGet]
        [Route("CancelarPedido/{idPedido}")]
        public IActionResult CancelarPedido(int idPedido)
        {
            var pedidoIn = new SqlParameter("@PedidoId", idPedido);
            var usuarioIn =new SqlParameter("@UsuarioId", 1); // TODO: usuario

            var canceladaOut = new SqlParameter();
            canceladaOut.ParameterName = "@Cancelada";
            canceladaOut.Direction = ParameterDirection.Output;
            canceladaOut.DbType = DbType.Boolean;

            _db.Database.ExecuteSqlCommand("CancelarPedido @PedidoId, @UsuarioId, @Cancelada OUT", pedidoIn, usuarioIn, canceladaOut);
            return Ok(canceladaOut.Value);
        }
    }
}