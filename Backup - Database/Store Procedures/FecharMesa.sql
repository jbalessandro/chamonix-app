USE [chamonix_Chamonix]
GO

/****** Object:  StoredProcedure [dbo].[FecharMesa]    Script Date: 20/11/2019 21:09:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[FecharMesa]
	@MesaId INT,
	@UsuarioId INT,
	@Fechada BIT OUT
AS
BEGIN
	
	BEGIN TRANSACTION
		UPDATE Pedido SET Termino = GETDATE(), FechadaPor = @UsuarioId WHERE MesaId = @MesaId AND FechadaPor IS NULL
		UPDATE Mesa SET Disponivel = 1 WHERE MesaId = @MesaId
	IF @@ERROR = 0
		BEGIN
			COMMIT
			SET @Fechada = 1
		END
	ELSE
		BEGIN
			ROLLBACK
			SET @Fechada = 0
		END

END
GO

