USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[TrocarMesa]    Script Date: 20/11/2019 21:11:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[TrocarMesa]
	@MesaId INT,
	@NovaMesaId INT,
	@NovaMesa INT OUT
AS
BEGIN
	SET NOCOUNT ON;

	IF EXISTS (SELECT PedidoId FROM Pedido WHERE MesaId = @NovaMesaId AND Termino IS NULL)
		BEGIN
			SET @NovaMesa = @MesaId
		END
	ELSE
		BEGIN
			UPDATE Pedido SET MesaId = @NovaMesaId WHERE MesaId = @MesaId AND Termino IS NULL
			UPDATE Mesa SET Disponivel = 1 WHERE MesaId = @MesaId
			UPDATE Mesa SET Disponivel = 0 WHERE MesaId = @NovaMesaId
			SET @NovaMesa = @NovaMesaId
		END
END
GO

