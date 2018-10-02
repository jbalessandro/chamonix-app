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
    public class CargoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public CargoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        public IEnumerable<Cargo> Get()
        {
            return _db.Cargo.OrderBy(x => x.Descricao).ToList();
        }

        [HttpGet("{id}")]
        public Cargo Get(int id)
        {
            return _db.Cargo.Find(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Cargo cargo)
        {
            cargo.Ativo = true;
            _db.Cargo.Add(cargo);
            _db.SaveChanges();
            return Ok(cargo);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Cargo cargo)
        {
            _db.Entry(cargo).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(cargo);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var cargo = _db.Cargo.Find(id);
            _db.Cargo.Remove(cargo);
            _db.SaveChanges();
            return Ok(cargo);
        }
    }
}