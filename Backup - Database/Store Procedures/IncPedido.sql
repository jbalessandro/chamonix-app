USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[IncPedido]    Script Date: 20/11/2019 21:10:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[IncPedido] 
	@MesaId INT,
	@UsuarioId INT,
	@Clientes INT = 2
AS
BEGIN
	SET NOCOUNT ON;
	
	DECLARE @DataOperacao DATE = (SELECT DataOperacao FROM Parametro);

	INSERT INTO Pedido (MesaId,Inicio,AbertaPor,Clientes,DataOperacao)
	VALUES (@MesaId,GETDATE(),@UsuarioId,@Clientes,@DataOperacao)
	
	DECLARE @Id INT;
	SET @Id = SCOPE_IDENTITY()

	UPDATE Mesa SET Disponivel = 0 WHERE MesaId = @MesaId
	
	SELECT @Id

END
GO

