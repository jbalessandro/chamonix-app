USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[PedidoPagamentoExclusao]    Script Date: 20/11/2019 21:11:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PedidoPagamentoExclusao]
	@PedidoPgtoId INT,
	@UsuarioId INT,
	@Saldo DECIMAL(18,2) OUT
AS
BEGIN
	SET NOCOUNT ON;

	UPDATE PedidoPgto SET Ativo = 0 WHERE PedidoPgtoId = @PedidoPgtoId

	DECLARE @PedidoId INT = (SELECT TOP 1 PedidoId FROM PedidoPgto WHERE PedidoPgtoId = @PedidoPgtoId)
	DECLARE @ServicoAceito BIT = (SELECT ServicoAceito FROM Pedido WHERE PedidoId = @PedidoId)
	DECLARE @ValorPago DECIMAL(18,2) = (SELECT ISNULL(SUM(Valor),0) FROM PedidoPgto WHERE PedidoId = @PedidoId AND Ativo = 1)

	UPDATE Pedido SET 
		Pago = @ValorPago,
		ServicoAceito = @ServicoAceito
	WHERE
		PedidoId = @PedidoId
	
	SELECT @Saldo = (
		CASE WHEN @ServicoAceito = 1 THEN
			(Total - @ValorPago)
		ELSE
			((Total - Servico) - @ValorPago)
		END)
	FROM
		Pedido
	WHERE
	    PedidoId = @PedidoId;
END
GO

