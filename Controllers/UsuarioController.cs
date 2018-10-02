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
    public class UsuarioController : Controller
    {
        private readonly ChamonixDbContext _db;

        public UsuarioController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            return _db.Usuario.Include(x => x.Cargo).OrderBy(x => x.Nome).ToList();
        }

        [HttpGet("{id}")]
        public Usuario Get(int id)
        {
            return _db.Usuario.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Usuario usuario)
        {
            usuario.Ativo = true;
            _db.Usuario.Add(usuario);
            _db.SaveChanges();
            return Ok(usuario);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Usuario usuario)
        {
            _db.Entry(usuario).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(usuario);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var usuario = _db.Usuario.Find(id);
            _db.Usuario.Remove(usuario);
            _db.SaveChanges();
            return Ok(usuario);
        }
    }
}