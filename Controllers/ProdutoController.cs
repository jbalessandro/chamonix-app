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
    public class ProdutoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public ProdutoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Produto> Get()
        {
            return _db.Produto.Include(x => x.Categoria).OrderBy(x => x.Descricao).ToList();
        }

        [HttpGet("{id}")]
        public Produto Get(int id)
        {
            return _db.Produto.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            produto.Ativo = true;
            produto.AlteradoEm = DateTime.Now;
            _db.Produto.Add(produto);
            _db.SaveChanges();
            return Ok(produto);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Produto produto)
        {
            produto.AlteradoEm = DateTime.Now;
            _db.Entry(produto).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(produto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var produto = _db.Produto.Find(id);
            _db.Produto.Remove(produto);
            _db.SaveChanges();
            return Ok(produto);
        }
    }
}