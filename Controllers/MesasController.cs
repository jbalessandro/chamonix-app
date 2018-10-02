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
    public class MesasController : Controller
    {
        private readonly ChamonixDbContext _db;

        public MesasController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Mesa> Get()
        {
            return _db.Mesa.OrderBy(x => x.Descricao).ToList();
        }

        [HttpGet("{id}")]
        public Mesa Get(int id)
        {
            return _db.Mesa.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Mesa mesa)
        {
            mesa.Ativo = true;
            mesa.Disponivel = true;
            _db.Mesa.Add(mesa);
            _db.SaveChanges();
            return Ok(mesa);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Mesa mesa)
        {
            _db.Entry(mesa).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(mesa);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var mesa = _db.Mesa.Find(id);
            _db.Mesa.Remove(mesa);
            _db.SaveChanges();
            return Ok(mesa);
        }
    }
}