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
    public class FormaPgtoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public FormaPgtoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<FormaPgto> Get()
        {
            return _db.FormaPgto.OrderBy(x => x.Descricao).ToList();
        }

        [HttpGet("{id}")]
        public FormaPgto Get(int id)
        {
            return _db.FormaPgto.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]FormaPgto formaPgto)
        {
            formaPgto.Ativo = true;
            _db.FormaPgto.Add(formaPgto);
            _db.SaveChanges();
            return Ok(formaPgto);
        }

        [HttpPut]
        public IActionResult Put([FromBody]FormaPgto formaPgto)
        {
            _db.Entry(formaPgto).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(formaPgto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var formaPgto = _db.FormaPgto.Find(id);
            _db.FormaPgto.Remove(formaPgto);
            _db.SaveChanges();
            return Ok(formaPgto);
        }
    }
}