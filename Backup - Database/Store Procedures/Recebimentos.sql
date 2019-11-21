USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[Recebimentos]    Script Date: 20/11/2019 21:11:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[Recebimentos] 
AS
BEGIN
	SET NOCOUNT ON;

	SELECT
	  SUM(pg.Valor) Valor,  
	  CASE
		WHEN  fp.Taxa = 0 THEN 0
		ELSE SUM(pg.Valor) - SUM(pg.Valor * (1 - fp.Taxa/100))
	  END ValorOperadora,
	  CASE
		WHEN fp.Taxa = 0 THEN SUM(pg.Valor)
		ELSE SUM(pg.Valor * (1 - fp.Taxa/100))
	  END Liquido,
	  fp.Descricao,
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE)) DtRecebimento,
	  fp.Taxa
	FROM
	  PedidoPgto pg
	  JOIN Pedido p ON p.PedidoId = pg.PedidoId
	  JOIN FormaPgto fp ON fp.FormaPgtoId = pg.FormaPgtoId and fp.Cortesia = 1
	WHERE  
	  pg.Ativo = 1 AND
	  DATEADD(day, fp.Prazo, p.Termino) > CAST(GETDATE() AS DATE)
	GROUP BY
	  fp.Descricao,
	  fp.Taxa,
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE))
    ORDER BY
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE))

END
GO

