USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[IncPedidoItem]    Script Date: 20/11/2019 21:10:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[IncPedidoItem] 
	@PedidoId INT,
	@ProdutoId INT,
	@Quantidade INT,
	@Observacao NCHAR(40),
	@UsuarioId INT
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @Preco MONEY;

	SELECT @Preco FROM Produto WHERE ProdutoId = @ProdutoId

	INSERT INTO PedidoItem (PedidoId,ProdutoId,Quantidade,Observacao,PedidoPor,PedidoEm,Preco)
	VALUES (@PedidoId,@ProdutoId,@Quantidade,@Observacao,@UsuarioId,GETDATE(),@Preco)

	SELECT SCOPE_IDENTITY()

END
GO

