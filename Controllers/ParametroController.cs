using System;
using System.Linq;
using System.Threading.Tasks;
using chamonix.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace chamonix.Controllers
{
    [Route("api/[controller]")]
    public class ParametroController : Controller
    {
        private readonly ChamonixDbContext _db;

        public ParametroController(ChamonixDbContext db){
            this._db = db;
        }

        [HttpGet]
        public Parametro Get()
        {
            return _db.Parametro.FirstOrDefault();
        }

        [HttpPut]
        public IActionResult Put([FromBody]Parametro parametro)
        {
            _db.Entry(parametro).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(parametro);
        }
    }
}