using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using chamonix.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace chamonix.Controllers
{
    [Route("api/[controller]")]
    public class PedidoItemController : Controller
    {
        private readonly ChamonixDbContext _db;

        public PedidoItemController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet("{pedidoItemId}")]
        public PedidoItem Get(int pedidoItemId)
        {
            return _db.PedidoItem.Include(x => x.Pedido).Where(x => x.PedidoItemId == pedidoItemId).FirstOrDefault();
        }

        [HttpGet("GetItensPedido/{pedidoId}")]
        public IEnumerable<PedidoItem> GetItensPedido(int pedidoId)
        {
            var itens = _db.PedidoItem.Include(p => p.Pedido).Include(p => p.Produto).Where(x => x.PedidoId == pedidoId).OrderBy(x => x.PedidoItemId).ToList();
            return itens;
        }

        [HttpPost]
        public IActionResult Post([FromBody]PedidoItem pedidoItem)
        {
            pedidoItem.Ativo = true;
            pedidoItem.PedidoEm = DateTime.Now;
            pedidoItem.PedidoPor = 1; // TODO: usuario
            pedidoItem.Observacao = pedidoItem.Observacao != null ? pedidoItem.Observacao.ToUpper().Trim() : null;
            _db.PedidoItem.Add(pedidoItem);
            _db.SaveChanges();
            return Ok(pedidoItem);
        }

        [HttpPut]
        public IActionResult Put([FromBody]PedidoItem pedidoItem)
        {
            if (pedidoItem.Pedido.Termino != null)
            {
                ModelState.AddModelError("Message", "Pedido já finalizado");
                return BadRequest(ModelState);
            }

            _db.Entry(pedidoItem).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(pedidoItem);
        }

        [HttpDelete("{pedidoItemId}")]
        public IActionResult Delete(int pedidoItemId)
        {
            var item = _db.PedidoItem.Include(x => x.Pedido).Where(x => x.PedidoItemId == pedidoItemId).FirstOrDefault();
            if (item == null)
            {
                return BadRequest();
            }

            if (item.Pedido.Termino != null)
            {
                ModelState.AddModelError("Message", "Pedido já finalizado. Efetue o fechamento da mesa");
                return BadRequest(ModelState);
            }

            _db.PedidoItem.Remove(item);
            _db.SaveChanges();
            return Ok(item);
        }
    }
}