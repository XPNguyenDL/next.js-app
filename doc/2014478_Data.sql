Create database [BookStore]
GO

USE [BookStore]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 5/4/2023 10:28:42 AM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[UrlSlug] [nvarchar](256) NOT NULL,
	[Description] [nvarchar](512) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discounts]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discounts](
	[Id] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[MinPrice] [real] NOT NULL,
	[ExpiryDate] [datetime] NOT NULL,
	[Code] [nvarchar](128) NOT NULL,
	[DiscountPercentage] [real] NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_Discounts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedback]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedback](
	[Id] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[UserName] [nvarchar](512) NOT NULL,
	[PostDate] [datetime] NOT NULL,
	[Content] [nvarchar](500) NULL,
	[Rate] [int] NOT NULL,
 CONSTRAINT [PK_Feedback] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderDetails]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderDetails](
	[OrderId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Price] [float] NOT NULL,
 CONSTRAINT [PK_OrderDetails] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [uniqueidentifier] NOT NULL,
	[OrderDate] [datetime] NOT NULL,
	[UrlSlug] [nvarchar](128) NOT NULL,
	[Status] [int] NOT NULL,
	[FirstName] [nvarchar](56) NOT NULL,
	[LastName] [nvarchar](56) NULL,
	[Email] [nvarchar](100) NOT NULL,
	[ShipAddress] [nvarchar](512) NOT NULL,
	[ShipTel] [nvarchar](12) NOT NULL,
	[Note] [nvarchar](512) NULL,
	[DiscountId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Picture]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Picture](
	[Id] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[Path] [nvarchar](512) NOT NULL,
	[Active] [bit] NOT NULL,
 CONSTRAINT [PK_Picture] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](128) NOT NULL,
	[ShortIntro] [nvarchar](256) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[Description] [nvarchar](2048) NULL,
	[UrlSlug] [nvarchar](256) NOT NULL,
	[Price] [float] NOT NULL,
	[Quantity] [int] NOT NULL,
	[Discount] [real] NOT NULL,
	[Active] [bit] NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](128) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserInRoles]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserInRoles](
	[RolesId] [uniqueidentifier] NOT NULL,
	[UsersId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_UserInRoles] PRIMARY KEY CLUSTERED 
(
	[RolesId] ASC,
	[UsersId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 5/4/2023 10:28:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](128) NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](512) NOT NULL,
	[Username] [nvarchar](64) NOT NULL,
	[Phone] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230403112906_Initial', N'7.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230403122847_Fix', N'7.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230403161155_FixConfig', N'7.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230404092046_AddUsersTable', N'7.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230503125154_FixLengthDescription', N'7.0.4')
GO
INSERT [dbo].[Categories] ([Id], [Name], [UrlSlug], [Description]) VALUES (N'661ee658-23cd-491c-a671-7c471d4f3418', N'Novel', N'novel', N'Novel')
INSERT [dbo].[Categories] ([Id], [Name], [UrlSlug], [Description]) VALUES (N'bfc23a08-35a9-468a-a13b-93201283b9e4', N'Light novel', N'light-novel', N'Light novel')
INSERT [dbo].[Categories] ([Id], [Name], [UrlSlug], [Description]) VALUES (N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4', N'Manga', N'manga', N'Manga')
INSERT [dbo].[Categories] ([Id], [Name], [UrlSlug], [Description]) VALUES (N'6454419e-57c6-47b1-a340-a0ec46cfffa0', N'Comic', N'comic', N'Comic')
GO
INSERT [dbo].[Discounts] ([Id], [Quantity], [MinPrice], [ExpiryDate], [Code], [DiscountPercentage], [Active]) VALUES (N'84bda14e-1921-4759-93f4-2afb8ba77b41', 100, 0, CAST(N'2023-07-03T20:04:14.817' AS DateTime), N'100000001', 50, 1)
INSERT [dbo].[Discounts] ([Id], [Quantity], [MinPrice], [ExpiryDate], [Code], [DiscountPercentage], [Active]) VALUES (N'e96457b3-de79-4672-ba0c-3c140f841d95', 100, 0, CAST(N'2023-07-03T20:04:14.817' AS DateTime), N'100000004', 50, 1)
INSERT [dbo].[Discounts] ([Id], [Quantity], [MinPrice], [ExpiryDate], [Code], [DiscountPercentage], [Active]) VALUES (N'93618622-3f72-433a-aa70-710392f26a33', 100, 0, CAST(N'2023-07-03T20:04:14.817' AS DateTime), N'100000003', 50, 1)
INSERT [dbo].[Discounts] ([Id], [Quantity], [MinPrice], [ExpiryDate], [Code], [DiscountPercentage], [Active]) VALUES (N'1cf87cd5-1167-4ebb-8acf-fcf5b2ad43ee', 100, 0, CAST(N'2023-07-03T20:04:14.817' AS DateTime), N'100000002', 50, 1)
GO
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'9da93c86-8884-4f1a-0616-08db4bd6e592', N'4e4f0157-f68d-4681-9e9d-08c458a1724c', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'660434bd-448c-4401-0617-08db4bd6e592', N'04f541ec-3662-4228-8abf-783a34619b4a', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'ee1db239-f915-49fd-0618-08db4bd6e592', N'3b9a2899-a32f-448d-85ea-aaf30474f1ea', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'71bca11d-2108-432e-0619-08db4bd6e592', N'9f841546-a4f1-4f4c-a6fa-ccfa0dc07a95', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'6f573e03-3319-4833-061a-08db4bd6e592', N'9524f0af-8441-4bb4-888e-6df47be86ec2', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'5fb22f21-2aa9-49b2-061b-08db4bd6e592', N'117b7dbf-cef3-4e7a-8928-b2b8d709dc74', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'e2ecf9be-7fcd-4893-061c-08db4bd6e592', N'643b5551-ee95-4551-962d-a91b7a9d24bf', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'a65c82bb-db90-46c0-061d-08db4bd6e592', N'e5a8f0c3-4297-4514-bb89-67b4f4ab0503', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'6fe3a778-3933-48c3-061e-08db4bd6e592', N'1d6a2e79-1267-4f1e-8eb9-7547f367e4c4', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'5dc3c794-8756-459d-061f-08db4bd6e592', N'48d9d1ea-6b19-4784-bc16-4c2c1606b585', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'ccae6862-20ea-4cef-0620-08db4bd6e592', N'c0d57c08-413b-49a8-ac9f-a37d3ce3836c', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'8dca0e46-bdf2-42c8-0621-08db4bd6e592', N'1791ca11-0762-4957-a7f0-47656a627494', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'd67678a1-522d-406b-0622-08db4bd6e592', N'c07af1b2-08ab-4549-9dd9-e39baf010924', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'8184fce9-99e8-4112-0623-08db4bd6e592', N'1496cf4e-4223-475f-bf06-2a43146d7828', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'b1348750-c7d0-42dc-0624-08db4bd6e592', N'993c7c9b-3046-41f0-bde4-93edc21f31a0', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'744d684d-d951-43fe-0625-08db4bd6e592', N'63f6ac20-2219-4154-8416-0c0f7e254748', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'bec3a53d-5189-46b8-0626-08db4bd6e592', N'f29b6e1f-2fb3-411a-a3eb-52fee5fd413c', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'1b26c997-fef1-4293-0627-08db4bd6e592', N'8ebbeeda-9baa-49df-abc8-880a8f6b3939', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'ffcff145-607a-4f28-0628-08db4bd6e592', N'5f03eab2-c34d-40cc-a05d-69cd222fcf49', N'images/default.png', 1)
INSERT [dbo].[Picture] ([Id], [ProductId], [Path], [Active]) VALUES (N'85487770-33a6-4101-0629-08db4bd6e592', N'08893bc0-4c53-44aa-a693-e416b1efb86c', N'images/default.png', 1)
GO
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'4e4f0157-f68d-4681-9e9d-08c458a1724c', N'Mừng cậu trở về', N'Một Kaze hòa đồng, tươi sáng và một Moto giản đơn, nghiêm túc lại là bạn thân từ nhỏ.', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Dù khi trưởng thành và có những nhóm bạn khác nhau, hai chàng trai vẫn luôn hiểu rõ người kia hơn ai hết. Cho đến một ngày, Kaze chợt nhận ra tình cảm mình dành cho Moto đã vượt quá ngưỡng tình bạn. Dẫu có cố gắng coi tình cảm ấy là hiểu nhầm đến thế nào hay cố gắng gạt bỏ nó ra sao, Kazu cũng dần phải thừa nhận, tấm chân tình này là thật…', N'mung-cau-tro-ve', 100000, 10, 10, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'63f6ac20-2219-4154-8416-0c0f7e254748', N'Nhật Ký Quan Sát Poyo Poyo – Tập 7', N'Nhật Ký Quan Sát Poyo Poyo – Tập 7', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Cục bông béo tròn Poyopoyo – vị big boss của gia đình vẫn chưa dừng lại những trò con bò của mình. Chú mèo béo tròn vẫn là một niềm vui của Moe còn Hide càng ngày càng thân thiết với Poyopoyo hơn nữa', N'nhat-ky-quan-sat-poyo-poyo-tap-7', 35000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'1496cf4e-4223-475f-bf06-2a43146d7828', N'Thực Đơn Của Bar Mao', N'Thực Đơn Của Bar Mao', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Nếu bước xuống cầu thang dẫn đến tầng hầm của ngôi nhà kế bên miếu thờ miêu thần, bạn sẽ tới được Bar Mao, nơi tụ tập bí mật của bầy mèo. Ở đây, những chú mèo có thể hóa thành người để thưởng thức những món cao lương mỹ vị như socola hay cơm mèo phong cách Trung Hoa,v.v…, và có những cuộc gặp gỡ thú vị…', N'thuc-don-cua-bar-mao', 92000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'1791ca11-0762-4957-a7f0-47656a627494', N'Người Lạ Dưới Gió Xuân Tập 2 (L''étranger du zéphyr)', N'Người Lạ Dưới Gió Xuân Tập 2 (L''étranger du zéphyr)', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Shun, tiểu thuyết gia trẻ tuổi, đã dẫn người mình thương - Mio, trở lại quê nhà sau nhiều năm bặt vô âm tín.', N'nguoi-la-duoi-gio-xuan-tap-2-l-etranger-du-zephyr', 90000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'48d9d1ea-6b19-4784-bc16-4c2c1606b585', N'Hành trình của Elaina tập 10', N'Hành trình của Elaina tập 10', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Trong tập 10 này, Elaina sẽ dẫn các bạn độc giả đi chu du từ trang sách qua những bãi biển trong xanh cát trắng, ghé qua 1 ngọn hải đăng, … và còn điều gì hấp dẫn đang chờ các bạn? Mời các bạn đón đọc tập 10 của bộ truyện Hành trình của Elaina!!!', N'hanh-trinh-cua-elaina-tap-10', 128000, 10, 0, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'f29b6e1f-2fb3-411a-a3eb-52fee5fd413c', N'Nhật Ký Quan Sát Poyo Poyo – Tập 5', N'Nhật Ký Quan Sát Poyo Poyo – Tập 5', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Vẫn là những câu chuyện hàng ngày xung quanh chú mèo Poyo Poyo vô cùng béo và đáng yêu. Mỗi ngày sẽ là niềm vui nếu được cầm trên tay cuộc sống của mèo béo này.', N'nhat-ky-quan-sat-poyo-poyo-tap-5', 35000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'e5a8f0c3-4297-4514-bb89-67b4f4ab0503', N'GAMERS! – Tập 4', N'GAMERS! – Tập 4', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Đối với Hoshinomori Chiaki, [Yama] là ân nhân rất đỗi quan trọng với cô trên không gian mạng, thậm chí còn quan trọng hơn cả gia đình. 
 
Giây phút Chiaki phát hiện ra danh tính thật sự của người ấy chính là Amano Keita – kẻ thù không đội trời chung, cũng chính là khoảnh khắc mối tình đầu chớm nở.', N'gamers-tap-4', 129000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'5f03eab2-c34d-40cc-a05d-69cd222fcf49', N'Bạch Tuyết Và Bảy Chú Mèo', N'Bạch Tuyết Và Bảy Chú Mèo', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Bạch tuyết và Bảy chú mèo là một tập truyện ngắn về cuộc sống của 7 chú mèo và được cô gái Phấn Muội hầu hạ mỗi ngày. Những câu chuyện rất đỗi quen thuộc với những ai nuôi mèo. ', N'bach-tuyet-va-bay-chu-meo', 95000, 10, 50, 1, N'661ee658-23cd-491c-a671-7c471d4f3418')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'9524f0af-8441-4bb4-888e-6df47be86ec2', N'DATE A LIVE 14 - Mukuro Planet', N'DATE A LIVE 14 - Mukuro Planet', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Đón giao thừa vào tháng Giêng, các Tinh linh vô cùng nhộn nhịp với việc đi chùa đầu năm. Một học kỳ mới lại bắt đầu tại trường trung học Raizen. Đối với cậu học sinh cấp ba Itsuka Shidou, chuỗi ngày yên bình đã bị phá hủy bởi một thiên thạch đến từ vũ trụ.', N'date-a-live-14-mukuro-planet', 120000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'1d6a2e79-1267-4f1e-8eb9-7547f367e4c4', N'Date A Live Encore – Tập 4', N'Date A Live Encore – Tập 4', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'“Xin chào mọi người,  đã lâu không gặp. Là tôi,  Tachibana Koushi đây.
Lần này tôi xin phép được gửi đến các bạn độc giả ‘Date a live Encore tập 4’ với trang bìa là cô gái chỉ huy trẻ tuổi của chúng ta.', N'date-a-live-encore-tap-4', 110000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'04f541ec-3662-4228-8abf-783a34619b4a', N'Mừng cậu trở về', N'Một Kaze hòa đồng, tươi sáng và một Moto giản đơn, nghiêm túc lại là bạn thân từ nhỏ.', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Dù khi trưởng thành và có những nhóm bạn khác nhau, hai chàng trai vẫn luôn hiểu rõ người kia hơn ai hết. Cho đến một ngày, Kaze chợt nhận ra tình cảm mình dành cho Moto đã vượt quá ngưỡng tình bạn. Dẫu có cố gắng coi tình cảm ấy là hiểu nhầm đến thế nào hay cố gắng gạt bỏ nó ra sao, Kazu cũng dần phải thừa nhận, tấm chân tình này là thật…', N'mung-cau-tro-ve', 100000, 10, 10, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'8ebbeeda-9baa-49df-abc8-880a8f6b3939', N'Nhật Ký Quan Sát Poyo Poyo – Tập 2', N'Nhật Ký Quan Sát Poyo Poyo – Tập 2', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Một cái gối?! Không, là chú mèo đấy. Poyo là một chúc mèo vàng với hình dáng đặc biệt – tròn vo, được gia đình cô chủ Satou nhận nuôi. Lúc đầu, em trai Hide rất ghét Poyo, nhưng qua từng ngày, Hide càng gần gũi với Poyo hơn. Những mẩu chuyện xoay quanh Poyo và gia đình Satou nhận nuôi Poyo đầy hài hước sẽ khiến bạn bật cười vui vẻ. Một tác phẩm thể loại đời thường, nhẹ nhàng mà đầy hài hước, đặc biệt dành cho những người yêu thích những chú mèo đáng yêu.', N'nhat-ky-quan-sat-poyo-poyo-tap-2', 35000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'993c7c9b-3046-41f0-bde4-93edc21f31a0', N'Tạm Biệt Chim Diệc', N'Tạm Biệt Chim Diệc', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Hai người họ gặp nhau trên sân thượng trường cấp 3 vào năm 16 tuổi. Souji thích ở 1 mình còn Mika thì vui vẻ và hòa đồng. Thoạt nhìn, họ có vẻ trái ngược nhau, nhưng trong tim cả hai đều giấu trăm mối ngổn ngang vì hoàn cảnh gia đình ko hạnh phúc.', N'tam-biet-chim-diec', 99000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'c0d57c08-413b-49a8-ac9f-a37d3ce3836c', N'Date A Live Encore – Tập 3', N'Date A Live Encore – Tập 3', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Nối tiếp tập 2, Date a live Encore 3 mang đến cho độc giả 7 chương truyện ngắn, trong đó mỗi chương là một câu chuyện khác nhau về các tinh linh. Điều đặc biệt trong tập 3 này chính là sự xuất hiện tới 2 lần của Tinh linh Kurumi trong chương Catcafe A Live và Cô gái Noel Kurumi. Tràn ngập trong câu chuyện là không khí Giáng sinh ấm áp, trùng hợp với thời điểm phát hành tập truyện tại Việt Nam lúc này.', N'date-a-live-encore-tap-3', 100000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'643b5551-ee95-4551-962d-a91b7a9d24bf', N'Hành Trình Của Elaina - Tập 11', N'Hành Trình Của Elaina - Tập 11', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Tiếp nối với nội dung của tập truyện trước, cô nàng Elaina tiếp tục chuyến ngao du khắp thế gian một mình và tận hưởng cuộc sống một cách trọn vẹn.', N'hanh-trinh-cua-elaina-tap-11', 110000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'3b9a2899-a32f-448d-85ea-aaf30474f1ea', N'ARIFURETA – Từ Tầm Thường Đến Bất Khả Chiến Bại – Tập 6', N'ARIFURETA – Từ Tầm Thường Đến Bất Khả Chiến Bại – Tập 6', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Sau khi chinh phục thành công Di tích biển sâu Melusine, trên con đường di chuyển đến mục tiêu tiếp theo trong Thất đại mê cung - Rừng rậm Haltina, nhóm Hajime đã có dịp tái ngộ với công chúa Liliana của vương quốc Heiligh. Đồng thời, bọn họ cũng phải đón nhận một tin xấu: cô Aiko, người vẫn luôn tin tưởng, bảo ban Hajime dù cậu đã thay đổi, đã bị một kẻ lạ mặt bắt cóc. ', N'arifureta-tu-tam-thuong-den-bat-kha-chien-bai-tap-6', 169000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'117b7dbf-cef3-4e7a-8928-b2b8d709dc74', N'Hành Trình Của Elaina - Tập 12', N'Hành Trình Của Elaina - Tập 12', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Ngày xửa ngày xưa, có một cô phù thủy tên Elaina. 

Cô đang trong chuyến hành trình chu du tự do, không bị ràng buộc bởi bất cứ ai hay bất cứ chuyện gì. 

Lần này, chuyến ngao du sẽ đưa cô đến gặp những con người đầy cá tính…', N'hanh-trinh-cua-elaina-tap-12', 110000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'9f841546-a4f1-4f4c-a6fa-ccfa0dc07a95', N'GAMERS! – Tập 5', N'GAMERS! – Tập 5', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'“Ưu tiên Aguri hơn việc chơi game”, Amano Keita, một nhân vật chính tầm thường như quần chúng, đã phá vỡ thiết lập nhân vật của mình. Chưa kể còn “chim chuột” với Chiaki ở quán ăn gia đình, xxx với Konoha giống như game khiêu dâm, có khác gì nhân vật chính trong tiểu thuyết harem đâu chứ! Uehara và Tendo không cách nào chúc phúc được cho cái thế giới không hề tuyệt vời này. Mặc dù rất muốn bắt đầu lại từ con số 0 từ thế giới khác, nhưng phong cách của tác phẩm lại không cho phép chuyển trường…', N'gamers-5', 108000, 10, 20, 1, N'bfc23a08-35a9-468a-a13b-93201283b9e4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'c07af1b2-08ab-4549-9dd9-e39baf010924', N'Kase Và Bìm Bìm Biếc', N'Kase Và Bìm Bìm Biếc', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'Cô bạn Kase lớp bên vừa xinh đẹp, lại còn là át chủ bài của CLB Điền kinh. Còn Yamada là thành viên của ban Phủ xanh, tính tình hướng nội.', N'kase-va-bim-bim-biec', 80000, 10, 15, 1, N'0f87206f-dbfc-4fd4-bf8a-96f8937a3cc4')
INSERT [dbo].[Products] ([Id], [Name], [ShortIntro], [CreateDate], [Description], [UrlSlug], [Price], [Quantity], [Discount], [Active], [CategoryId]) VALUES (N'08893bc0-4c53-44aa-a693-e416b1efb86c', N'Love Sick 2 - Thanh Xuân Không Hối Tiếc', N'Love Sick 2 - Thanh Xuân Không Hối Tiếc', CAST(N'2023-05-03T20:04:14.913' AS DateTime), N'“Nếu trên đời xuất hiện một người yêu con trai của mẹ bằng tất cả tấm lòng, nhưng tình cảm ấy không được xã hội chấp nhận. Liệu đó có được xem là tình yêu đẹp không mẹ …”', N'love-sick-2-thanh-xuan-khong-hoi-tiec', 90000, 10, 15, 1, N'661ee658-23cd-491c-a671-7c471d4f3418')
GO
INSERT [dbo].[Roles] ([Id], [Name]) VALUES (N'13ef4043-5c9c-4571-b4f4-49f21e06e09e', N'Manager')
INSERT [dbo].[Roles] ([Id], [Name]) VALUES (N'821b6582-79dd-4b94-a143-ef681f194bf3', N'Admin')
GO
INSERT [dbo].[UserInRoles] ([RolesId], [UsersId]) VALUES (N'13ef4043-5c9c-4571-b4f4-49f21e06e09e', N'74b58fd7-5dd1-479a-b5d8-2c495accdfee')
INSERT [dbo].[UserInRoles] ([RolesId], [UsersId]) VALUES (N'821b6582-79dd-4b94-a143-ef681f194bf3', N'74b58fd7-5dd1-479a-b5d8-2c495accdfee')
GO
INSERT [dbo].[Users] ([Id], [Name], [Email], [Password], [Username], [Phone], [Address]) VALUES (N'74b58fd7-5dd1-479a-b5d8-2c495accdfee', N'Admin', N'Admin@gmail.com', N'g4RBLOGl6HNbgvExFHfseQ==;ehh0XO+/ec8j1uTOjm84ikPP8qfYsN9XC0LQNWXrgVs=', N'admin', N'0123456789', N'DLU')
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT (CONVERT([real],(0))) FOR [MinPrice]
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT (CONVERT([real],(0))) FOR [DiscountPercentage]
GO
ALTER TABLE [dbo].[Discounts] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Active]
GO
ALTER TABLE [dbo].[Feedback] ADD  DEFAULT ((0)) FOR [Rate]
GO
ALTER TABLE [dbo].[Picture] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Active]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [Price]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([real],(0))) FOR [Discount]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Active]
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Products_ProductId]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Details] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_Orders_Details]
GO
ALTER TABLE [dbo].[OrderDetails]  WITH CHECK ADD  CONSTRAINT [FK_Products_Details] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderDetails] CHECK CONSTRAINT [FK_Products_Details]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Discounts_DiscountId] FOREIGN KEY([DiscountId])
REFERENCES [dbo].[Discounts] ([Id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Discounts_DiscountId]
GO
ALTER TABLE [dbo].[Picture]  WITH CHECK ADD  CONSTRAINT [FK_Products_Pictures] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Picture] CHECK CONSTRAINT [FK_Products_Pictures]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Categories]
GO
ALTER TABLE [dbo].[UserInRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserInRoles_Roles_RolesId] FOREIGN KEY([RolesId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserInRoles] CHECK CONSTRAINT [FK_UserInRoles_Roles_RolesId]
GO
ALTER TABLE [dbo].[UserInRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserInRoles_Users_UsersId] FOREIGN KEY([UsersId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserInRoles] CHECK CONSTRAINT [FK_UserInRoles_Users_UsersId]
GO
