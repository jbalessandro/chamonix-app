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
    public class MesaController : Controller
    {
        private readonly ChamonixDbContext _db;

        public MesaController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("GetPosicaoMesas")]
        public IEnumerable<MesaPosicao> GetPosicaoMesas()
        {
            var posicoes = _db.MesaPosicao.FromSql("GetPosicaoMesas").ToList();
            return posicoes;
        }

        [HttpGet]
        [Route("TrocarMesa/{mesaId}/{novaMesaId}")]
        public IActionResult TrocarMesa(int mesaId, int novaMesaId)
        {
            var mesaIn = new SqlParameter("@MesaId", mesaId);
            var novaMesaIn = new SqlParameter("@NovaMesaId", novaMesaId);

            var novaMesaOut = new SqlParameter();
            novaMesaOut.ParameterName = "@NovaMesa";
            novaMesaOut.Direction = ParameterDirection.Output;
            novaMesaOut.DbType = DbType.Int32;

            _db.Database.ExecuteSqlCommand("TrocarMesa @MesaId, @NovaMesaId, @NovaMesa OUT", mesaIn, novaMesaIn, novaMesaOut);
            return Ok(novaMesaOut.Value);
        }

        [HttpGet]
        [Route("GetConta/{mesaId}")]
        public IActionResult GetConta(int mesaId)
        {
            var mesaIn = new SqlParameter("@MesaId", mesaId);
            var consumo = _db.ContaConsumo.FromSql("GetContaConsumo @MesaId", mesaIn).ToList();

            var conta = new Conta();
            conta.ContaConsumo = consumo;
            conta.Pedido = _db.Pedido.Include(m => m.Mesa).Where(x => x.MesaId == mesaId).FirstOrDefault();

            return Ok(conta);
        }

        [HttpGet]
        [Route("FecharMesa/{mesaId}")]
        public IActionResult FecharMesa(int mesaId)
        {
            var mesaIn = new SqlParameter("@MesaId", mesaId);
            var usuarioIn = new SqlParameter("@UsuarioId", 1); // TODO: usuario
            var fechadaOut = new SqlParameter("@Fechada", SqlDbType.Bit);
            fechadaOut.Direction = ParameterDirection.Output;

            _db.Database.ExecuteSqlCommand("FecharMesa @MesaId, @UsuarioId, @Fechada OUT", mesaIn, usuarioIn, fechadaOut);

            return Ok(fechadaOut.Value);
        }
    }
}