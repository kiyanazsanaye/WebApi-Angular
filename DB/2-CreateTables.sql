USE [BesLogic]
GO
CREATE TABLE [dbo].[Aircrafts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ModelName] [nvarchar](100) NOT NULL,
	[SerialNumber] [nvarchar](50) NOT NULL,
	[RegistrationNumber] [nvarchar](50) NOT NULL,
	[RegistrationStatus] [bit] NOT NULL,
	[RegistrationDate] [smalldatetime] NULL,
 CONSTRAINT [PK_Aircrafts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Aircrafts] ON 
GO
INSERT [dbo].[Aircrafts] ([Id], [ModelName], [SerialNumber], [RegistrationNumber], [RegistrationStatus], [RegistrationDate]) VALUES (1, N'Kiyanaz-a-2039-7089', N'120398573SS234', N'123', 1, CAST(N'2023-03-23T15:15:00' AS SmallDateTime))
GO
SET IDENTITY_INSERT [dbo].[Aircrafts] OFF
GO
ALTER TABLE [dbo].[Aircrafts] ADD  CONSTRAINT [DF_Aircrafts_RegistrationDate]  DEFAULT (getdate()) FOR [RegistrationDate]
GO
USE [master]
GO
ALTER DATABASE [BesLogic] SET  READ_WRITE 
GO