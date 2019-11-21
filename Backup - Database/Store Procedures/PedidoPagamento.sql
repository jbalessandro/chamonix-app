USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[PedidoPagamento]    Script Date: 20/11/2019 21:11:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[PedidoPagamento] 
	@PedidoId INT,
	@FormaPgtoId INT,
	@Valor DECIMAL(18,2),
	@UsuarioId INT,
	@ServicoAceito BIT,
	@Saldo DECIMAL(18,2) OUT
AS
BEGIN
	SET NOCOUNT ON;

	BEGIN TRANSACTION
		INSERT INTO PedidoPgto (PedidoId,FormaPgtoId,Valor,UsuarioId) VALUES (@PedidoId,@FormaPgtoId,@Valor,@UsuarioId)
		DECLARE @ValorPago DECIMAL(18,2) = (SELECT ISNULL(SUM(Valor),0) FROM PedidoPgto WHERE PedidoId = @PedidoId AND Ativo = 1)

		UPDATE Pedido SET 
			Pago = @ValorPago,
			ServicoAceito = @ServicoAceito
		WHERE
			PedidoId = @PedidoId
		COMMIT
	IF @@ERROR <> 0
		ROLLBACK
	
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

