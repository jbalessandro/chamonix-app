USE [master]
GO
/****** Object:  Database [chamonix_Chamonix]    Script Date: 20/11/2019 21:14:14 ******/
CREATE DATABASE [chamonix_Chamonix]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'chamonix_Chamonix', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\chamonix_Chamonix.mdf' , SIZE = 8192KB , MAXSIZE = 512000KB , FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'chamonix_Chamonix_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\chamonix_Chamonix_log.ldf' , SIZE = 139264KB , MAXSIZE = 1048576KB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [chamonix_Chamonix] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [chamonix_Chamonix].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [chamonix_Chamonix] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET ARITHABORT OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [chamonix_Chamonix] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [chamonix_Chamonix] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET  ENABLE_BROKER 
GO
ALTER DATABASE [chamonix_Chamonix] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [chamonix_Chamonix] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET RECOVERY FULL 
GO
ALTER DATABASE [chamonix_Chamonix] SET  MULTI_USER 
GO
ALTER DATABASE [chamonix_Chamonix] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [chamonix_Chamonix] SET DB_CHAINING OFF 
GO
ALTER DATABASE [chamonix_Chamonix] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [chamonix_Chamonix] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [chamonix_Chamonix] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [chamonix_Chamonix] SET QUERY_STORE = OFF
GO
USE [chamonix_Chamonix]
GO
/****** Object:  User [appchamonix]    Script Date: 20/11/2019 21:14:19 ******/
CREATE USER [appchamonix] FOR LOGIN [appchamonix] WITH DEFAULT_SCHEMA=[appchamonix]
GO
ALTER ROLE [db_ddladmin] ADD MEMBER [appchamonix]
GO
ALTER ROLE [db_backupoperator] ADD MEMBER [appchamonix]
GO
ALTER ROLE [db_datareader] ADD MEMBER [appchamonix]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [appchamonix]
GO
/****** Object:  Schema [appchamonix]    Script Date: 20/11/2019 21:14:20 ******/
CREATE SCHEMA [appchamonix]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 20/11/2019 21:14:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cargo]    Script Date: 20/11/2019 21:14:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cargo](
	[CargoId] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [nchar](20) NOT NULL,
	[Ativo] [bit] NOT NULL,
 CONSTRAINT [PK_Cargo] PRIMARY KEY CLUSTERED 
(
	[CargoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categoria]    Script Date: 20/11/2019 21:14:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categoria](
	[CategoriaId] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [nchar](20) NOT NULL,
	[Cardapio] [bit] NOT NULL,
	[Ativo] [bit] NOT NULL,
	[AlteradoEm] [datetime2](7) NOT NULL,
	[MenuSecundario] [bit] NOT NULL,
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[CategoriaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FormaPgto]    Script Date: 20/11/2019 21:14:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FormaPgto](
	[FormaPgtoId] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [nchar](20) NOT NULL,
	[Cartao] [bit] NOT NULL,
	[Ativo] [bit] NOT NULL,
	[Prazo] [int] NULL,
	[Cortesia] [bit] NULL,
	[Taxa] [decimal](5, 2) NULL,
 CONSTRAINT [PK_FormaPgtoId] PRIMARY KEY CLUSTERED 
(
	[FormaPgtoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mesa]    Script Date: 20/11/2019 21:14:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mesa](
	[MesaId] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [nchar](10) NOT NULL,
	[Disponivel] [bit] NOT NULL,
	[Lugares] [tinyint] NOT NULL,
	[Ativo] [bit] NOT NULL,
 CONSTRAINT [PK_Mesa] PRIMARY KEY CLUSTERED 
(
	[MesaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parametro]    Script Date: 20/11/2019 21:14:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parametro](
	[ParametroId] [int] IDENTITY(1,1) NOT NULL,
	[DataOperacao] [date] NOT NULL,
 CONSTRAINT [PK_Parametro] PRIMARY KEY CLUSTERED 
(
	[ParametroId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pedido]    Script Date: 20/11/2019 21:14:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pedido](
	[PedidoId] [int] IDENTITY(1,1) NOT NULL,
	[MesaId] [int] NOT NULL,
	[Inicio] [datetime2](7) NOT NULL,
	[Termino] [datetime2](7) NULL,
	[AbertaPor] [int] NOT NULL,
	[FechadaPor] [int] NULL,
	[Clientes] [tinyint] NOT NULL,
	[Consumo] [decimal](18, 2) NOT NULL,
	[Servico] [decimal](18, 2) NOT NULL,
	[Total] [decimal](18, 2) NOT NULL,
	[Pago] [decimal](18, 2) NOT NULL,
	[ServicoAceito] [bit] NOT NULL,
	[DataOperacao] [date] NOT NULL,
 CONSTRAINT [PK_Pedido] PRIMARY KEY CLUSTERED 
(
	[PedidoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PedidoItem]    Script Date: 20/11/2019 21:14:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PedidoItem](
	[PedidoItemId] [int] IDENTITY(1,1) NOT NULL,
	[PedidoId] [int] NOT NULL,
	[ProdutoId] [int] NOT NULL,
	[Quantidade] [tinyint] NOT NULL,
	[Observacao] [nchar](40) NULL,
	[Ativo] [bit] NOT NULL,
	[PedidoPor] [int] NOT NULL,
	[CanceladoPor] [int] NULL,
	[PedidoEm] [datetime2](7) NOT NULL,
	[Preco] [money] NOT NULL,
	[Servido] [bit] NOT NULL,
	[Cortesia] [bit] NULL,
 CONSTRAINT [PK_PedidoItem] PRIMARY KEY CLUSTERED 
(
	[PedidoItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PedidoPgto]    Script Date: 20/11/2019 21:14:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PedidoPgto](
	[PedidoPgtoId] [int] IDENTITY(1,1) NOT NULL,
	[PedidoId] [int] NOT NULL,
	[FormaPgtoId] [int] NOT NULL,
	[Valor] [decimal](18, 2) NOT NULL,
	[UsuarioId] [int] NOT NULL,
	[Ativo] [bit] NOT NULL,
 CONSTRAINT [PK_PedidoPgto] PRIMARY KEY CLUSTERED 
(
	[PedidoPgtoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Produto]    Script Date: 20/11/2019 21:14:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Produto](
	[ProdutoId] [int] IDENTITY(1,1) NOT NULL,
	[CategoriaId] [int] NOT NULL,
	[Descricao] [nchar](40) NOT NULL,
	[Detalhe] [ntext] NULL,
	[ValorVenda] [money] NOT NULL,
	[Imagem] [image] NULL,
	[Ativo] [bit] NOT NULL,
	[AlteradoEm] [datetime2](7) NOT NULL,
	[ControleEstoque] [bit] NOT NULL,
	[Estoque] [int] NOT NULL,
 CONSTRAINT [PK_Produto] PRIMARY KEY CLUSTERED 
(
	[ProdutoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 20/11/2019 21:14:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[UsuarioId] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nchar](20) NOT NULL,
	[CargoId] [int] NOT NULL,
	[Telefone] [nchar](20) NULL,
	[Ativo] [bit] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[UsuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_Pedido_Inicio]    Script Date: 20/11/2019 21:14:25 ******/
CREATE NONCLUSTERED INDEX [IX_Pedido_Inicio] ON [dbo].[Pedido]
(
	[Inicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Pedido_MesaId_Termino]    Script Date: 20/11/2019 21:14:25 ******/
CREATE NONCLUSTERED INDEX [IX_Pedido_MesaId_Termino] ON [dbo].[Pedido]
(
	[MesaId] ASC,
	[Termino] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PedidoItem]    Script Date: 20/11/2019 21:14:25 ******/
CREATE NONCLUSTERED INDEX [IX_PedidoItem] ON [dbo].[PedidoItem]
(
	[PedidoItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cargo] ADD  CONSTRAINT [DF_Cargo_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[Categoria] ADD  CONSTRAINT [DF_Categoria_Cardapio]  DEFAULT ((1)) FOR [Cardapio]
GO
ALTER TABLE [dbo].[Categoria] ADD  CONSTRAINT [DF_Categoria_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[Categoria] ADD  DEFAULT ((0)) FOR [MenuSecundario]
GO
ALTER TABLE [dbo].[FormaPgto] ADD  CONSTRAINT [DF_FormaPgtoId_Cartao]  DEFAULT ((0)) FOR [Cartao]
GO
ALTER TABLE [dbo].[FormaPgto] ADD  CONSTRAINT [DF_FormaPgtoId_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[FormaPgto] ADD  DEFAULT ((0)) FOR [Prazo]
GO
ALTER TABLE [dbo].[FormaPgto] ADD  DEFAULT ((0)) FOR [Cortesia]
GO
ALTER TABLE [dbo].[FormaPgto] ADD  DEFAULT ((0)) FOR [Taxa]
GO
ALTER TABLE [dbo].[Mesa] ADD  CONSTRAINT [DF_Mesa_Disponivel]  DEFAULT ((1)) FOR [Disponivel]
GO
ALTER TABLE [dbo].[Mesa] ADD  CONSTRAINT [DF_Mesa_Ativa]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Venda_Clientes]  DEFAULT ((2)) FOR [Clientes]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Pedido_Consumo]  DEFAULT ((0)) FOR [Consumo]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Pedido_Servico]  DEFAULT ((0)) FOR [Servico]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Pedido_Total]  DEFAULT ((0)) FOR [Total]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Pedido_Pago]  DEFAULT ((0)) FOR [Pago]
GO
ALTER TABLE [dbo].[Pedido] ADD  CONSTRAINT [DF_Pedido_ServicoAceito]  DEFAULT ((1)) FOR [ServicoAceito]
GO
ALTER TABLE [dbo].[PedidoItem] ADD  CONSTRAINT [DF_PedidoItem_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[PedidoItem] ADD  CONSTRAINT [DF_PedidoItem_Servido]  DEFAULT ((0)) FOR [Servido]
GO
ALTER TABLE [dbo].[PedidoItem] ADD  CONSTRAINT [DF_PedidoItem_Cortesia]  DEFAULT ((0)) FOR [Cortesia]
GO
ALTER TABLE [dbo].[PedidoPgto] ADD  CONSTRAINT [DF_PedidoPgto_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[Produto] ADD  CONSTRAINT [DF_Table_1_ATIVO]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[Produto] ADD  CONSTRAINT [DF_Produto_ControleEstoque]  DEFAULT ((0)) FOR [ControleEstoque]
GO
ALTER TABLE [dbo].[Produto] ADD  CONSTRAINT [DF_Produto_Estoque]  DEFAULT ((0)) FOR [Estoque]
GO
ALTER TABLE [dbo].[Usuario] ADD  CONSTRAINT [DF_Usuario_Ativo]  DEFAULT ((1)) FOR [Ativo]
GO
ALTER TABLE [dbo].[PedidoItem]  WITH CHECK ADD  CONSTRAINT [FK_PedidoItem_Pedido] FOREIGN KEY([PedidoId])
REFERENCES [dbo].[Pedido] ([PedidoId])
GO
ALTER TABLE [dbo].[PedidoItem] CHECK CONSTRAINT [FK_PedidoItem_Pedido]
GO
ALTER TABLE [dbo].[PedidoItem]  WITH CHECK ADD  CONSTRAINT [FK_PedidoItem_Produto] FOREIGN KEY([ProdutoId])
REFERENCES [dbo].[Produto] ([ProdutoId])
GO
ALTER TABLE [dbo].[PedidoItem] CHECK CONSTRAINT [FK_PedidoItem_Produto]
GO
ALTER TABLE [dbo].[PedidoItem]  WITH CHECK ADD  CONSTRAINT [FK_PedidoItem_Usuario] FOREIGN KEY([PedidoPor])
REFERENCES [dbo].[Usuario] ([UsuarioId])
GO
ALTER TABLE [dbo].[PedidoItem] CHECK CONSTRAINT [FK_PedidoItem_Usuario]
GO
ALTER TABLE [dbo].[PedidoPgto]  WITH CHECK ADD  CONSTRAINT [FK_PedidoPgto_FormaPgto] FOREIGN KEY([FormaPgtoId])
REFERENCES [dbo].[FormaPgto] ([FormaPgtoId])
GO
ALTER TABLE [dbo].[PedidoPgto] CHECK CONSTRAINT [FK_PedidoPgto_FormaPgto]
GO
ALTER TABLE [dbo].[PedidoPgto]  WITH CHECK ADD  CONSTRAINT [FK_PedidoPgto_PedidoPgto] FOREIGN KEY([PedidoId])
REFERENCES [dbo].[Pedido] ([PedidoId])
GO
ALTER TABLE [dbo].[PedidoPgto] CHECK CONSTRAINT [FK_PedidoPgto_PedidoPgto]
GO
ALTER TABLE [dbo].[PedidoPgto]  WITH CHECK ADD  CONSTRAINT [FK_PedidoPgto_Usuario] FOREIGN KEY([UsuarioId])
REFERENCES [dbo].[Usuario] ([UsuarioId])
GO
ALTER TABLE [dbo].[PedidoPgto] CHECK CONSTRAINT [FK_PedidoPgto_Usuario]
GO
ALTER TABLE [dbo].[Produto]  WITH CHECK ADD  CONSTRAINT [FK_Produto_Categoria1] FOREIGN KEY([CategoriaId])
REFERENCES [dbo].[Categoria] ([CategoriaId])
GO
ALTER TABLE [dbo].[Produto] CHECK CONSTRAINT [FK_Produto_Categoria1]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Cargo] FOREIGN KEY([CargoId])
REFERENCES [dbo].[Cargo] ([CargoId])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Cargo]
GO
/****** Object:  StoredProcedure [dbo].[CancelarPedido]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[FecharMesa]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[GetContaConsumo]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[GetPosicaoMesas]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[IncPedido]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[IncPedidoItem]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[InfoMesa]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[PedidoPagamento]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[PedidoPagamentoExclusao]    Script Date: 20/11/2019 21:14:25 ******/
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
/****** Object:  StoredProcedure [dbo].[Recebimentos]    Script Date: 20/11/2019 21:14:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Recebimentos] 
AS
BEGIN
	SET NOCOUNT ON;

	SELECT
	  SUM(pg.Valor) Valor,  
	  CASE
		WHEN  fp.Taxa = 0 THEN 0
		ELSE SUM(pg.Valor) - SUM(pg.Valor * (1 - fp.Taxa/100))
	  END ValorOperadora,
	  CASE
		WHEN fp.Taxa = 0 THEN SUM(pg.Valor)
		ELSE SUM(pg.Valor * (1 - fp.Taxa/100))
	  END Liquido,
	  fp.Descricao,
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE)) DtRecebimento,
	  fp.Taxa
	FROM
	  PedidoPgto pg
	  JOIN Pedido p ON p.PedidoId = pg.PedidoId
	  JOIN FormaPgto fp ON fp.FormaPgtoId = pg.FormaPgtoId and fp.Cortesia = 1
	WHERE  
	  pg.Ativo = 1 AND
	  DATEADD(day, fp.Prazo, p.Termino) > CAST(GETDATE() AS DATE)
	GROUP BY
	  fp.Descricao,
	  fp.Taxa,
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE))
    ORDER BY
	  DATEADD(day, fp.Prazo, CAST(p.Termino AS DATE))

END
GO
/****** Object:  StoredProcedure [dbo].[TrocarMesa]    Script Date: 20/11/2019 21:14:25 ******/
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
USE [master]
GO
ALTER DATABASE [chamonix_Chamonix] SET  READ_WRITE 
GO
