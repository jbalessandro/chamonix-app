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
    public class CategoriaController : Controller
    {
        private readonly ChamonixDbContext _db;

        public CategoriaController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Categoria> Get()
        {
            return _db.Categoria.OrderBy(x => x.Descricao).ToList();
        }

        [HttpGet("{id}")]
        public Categoria Get(int id)
        {
            return _db.Categoria.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Categoria categoria)
        {
            categoria.Ativo = true;
            categoria.AlteradoEm = DateTime.Now;
            _db.Categoria.Add(categoria);
            _db.SaveChanges();
            return Ok(categoria);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Categoria categoria)
        {
            categoria.AlteradoEm = DateTime.Now;
            _db.Entry(categoria).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(categoria);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var categoria = _db.Categoria.Find(id);
            _db.Categoria.Remove(categoria);
            _db.SaveChanges();
            return Ok(categoria);
        }
    }
}