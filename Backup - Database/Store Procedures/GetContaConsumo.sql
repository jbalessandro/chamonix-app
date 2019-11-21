USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[GetContaConsumo]    Script Date: 20/11/2019 21:09:44 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetContaConsumo]
	@MesaId INT
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @PedidoId INT = (SELECT PedidoId FROM Pedido WHERE MesaId = @MesaId AND Termino IS NULL)
	DECLARE @Consumo DECIMAL(18,2) = (SELECT ISNULL(SUM(Quantidade * Preco),0) FROM PedidoItem WHERE PedidoId = @PedidoId AND Ativo = 1)
	DECLARE @Servico DECIMAL(18,2) = @Consumo * .1
	
	UPDATE Pedido SET Consumo = @Consumo, Servico = @Servico, Total = @Consumo + @Servico WHERE PedidoId = @PedidoId

	SELECT
		ROW_NUMBER() OVER (ORDER BY Descricao) Item,
		'C' Tipo,
		SUM(i.Quantidade) Quantidade,
		p.Descricao,
		i.Preco,
		ISNULL((SUM(i.Quantidade) * Preco),0) Total
	FROM
		PedidoItem i
		JOIN Produto p ON p.ProdutoId = i.ProdutoId
	WHERE
		i.PedidoId = @PedidoId AND
		i.Ativo = 1 AND
		i.Preco > 0
	GROUP BY
		p.Descricao,
		i.Preco		
END
GO

