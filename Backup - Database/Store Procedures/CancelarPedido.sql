USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[CancelarPedido]    Script Date: 20/11/2019 21:09:03 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[CancelarPedido]
	@PedidoId INT,
	@UsuarioId INT,
	@Cancelada BIT OUT
AS
BEGIN
	SET NOCOUNT ON;

	IF EXISTS (SELECT PedidoId FROM Pedido WHERE PedidoId=@PedidoId AND Termino IS NOT NULL)
		BEGIN
			SET @Cancelada = 0
		END
	ELSE
		BEGIN
			DECLARE @MesaId INT = (SELECT MesaId FROM Pedido WHERE PedidoId=@PedidoId)
			UPDATE PedidoItem SET Ativo = 0, CanceladoPor = @UsuarioId WHERE PedidoId = @PedidoId
			UPDATE Pedido SET FechadaPor = @UsuarioId, Termino = GETDATE() WHERE PedidoId = @PedidoId
			UPDATE Mesa SET Disponivel = 1 WHERE MesaId = @MesaId
			SET @Cancelada = 1
		END
END
GO

