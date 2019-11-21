USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[GetPosicaoMesas]    Script Date: 20/11/2019 21:10:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetPosicaoMesas]
AS
	SET NOCOUNT ON;
	SELECT
		m.Ativo, m.Descricao, m.Disponivel,	m.Lugares, m.MesaId,
		DATEADD(hh,4,p.Inicio) AS Inicio, ISNULL(p.PedidoId,0) PedidoId, ISNULL(p.Clientes,0) Clientes
	FROM
		Mesa m
		LEFT JOIN Pedido p ON p.MesaId = m.MesaId AND p.FechadaPor IS NULL
	WHERE
		m.Ativo = 1 
	ORDER BY
		m.Descricao;
GO

