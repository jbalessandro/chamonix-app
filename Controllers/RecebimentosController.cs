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
    public class RecebimentosController : Controller
    {
        private readonly ChamonixDbContext _db;

        public RecebimentosController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("GetRecebimentos")]
        public IEnumerable<Recebimento> GetRecebimentos()
        {
            return _db.Recebimento.FromSql("Recebimentos").ToList();
        }
    }
}