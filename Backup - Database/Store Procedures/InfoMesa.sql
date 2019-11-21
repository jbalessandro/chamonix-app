USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[InfoMesa]    Script Date: 20/11/2019 21:10:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InfoMesa] 
	@MesaId INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT
		p.PedidoId, p.MesaId, p.Inicio, p.Termino, p.AbertaPor, p.Clientes
	FROM
		Pedido p
		JOIN Usuario ua on ua.UsuarioId = p.AbertaPor
	WHERE
		p.MesaId = @MesaId AND
		p.FechadaPor IS NULL

END
GO

