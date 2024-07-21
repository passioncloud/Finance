using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false),
                    Name = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255)", nullable: false),
                    UserName = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PasswordHash = table.Column<string>(type: "longtext", nullable: true),
                    SecurityStamp = table.Column<string>(type: "longtext", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "longtext", nullable: true),
                    PhoneNumber = table.Column<string>(type: "longtext", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetime", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CustomerLedgerEntries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    EntryNo = table.Column<string>(type: "longtext", nullable: false),
                    CustomerNo = table.Column<string>(type: "longtext", nullable: false),
                    PostingDate = table.Column<DateOnly>(type: "date", nullable: false),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    DocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false),
                    CustomerName = table.Column<string>(type: "longtext", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    CustomerPostingGroupCode = table.Column<string>(type: "longtext", nullable: false),
                    UserId = table.Column<string>(type: "longtext", nullable: false),
                    AppliesToDocType = table.Column<int>(type: "int", nullable: false),
                    AppliesToDocNo = table.Column<string>(type: "longtext", nullable: true),
                    Open = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DueDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Apiitive = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ClosedByEntryNo = table.Column<int>(type: "int", nullable: false),
                    AppliesToId = table.Column<string>(type: "longtext", nullable: true),
                    JournalBatchName = table.Column<string>(type: "longtext", nullable: false),
                    BalAccountType = table.Column<int>(type: "int", nullable: false),
                    BalAccountNo = table.Column<string>(type: "longtext", nullable: false),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    ExternalDocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    AmountToApply = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    ApplyingEntry = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Reversed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Prepayment = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PaymentMethodCode = table.Column<string>(type: "longtext", nullable: true),
                    AppliesToExtDocNo = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerLedgerEntries", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "GLAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    No = table.Column<string>(type: "longtext", nullable: false),
                    Name = table.Column<string>(type: "longtext", nullable: false),
                    AccountType = table.Column<int>(type: "int", nullable: true),
                    AccountCategory = table.Column<int>(type: "int", nullable: true),
                    IncomeOrBalance = table.Column<int>(type: "int", nullable: false),
                    DebitOrCredit = table.Column<int>(type: "int", nullable: false),
                    Blocked = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    DirectPosting = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    GenPostingType = table.Column<int>(type: "int", nullable: false),
                    GenBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    GenProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATProdPostingGroupId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GLAccounts", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    Cost = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    CreatedBy = table.Column<string>(type: "longtext", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedBy = table.Column<string>(type: "longtext", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "NoSeries",
                columns: table => new
                {
                    No = table.Column<string>(type: "varchar(255)", nullable: false),
                    Name = table.Column<string>(type: "longtext", nullable: false),
                    StartNo = table.Column<string>(type: "longtext", nullable: false),
                    LastUsedNo = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NoSeries", x => x.No);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "VATBusinessPostingGroups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VATBusinessPostingGroups", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "VATProductPostingGroups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VATProductPostingGroups", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(type: "varchar(255)", nullable: false),
                    ClaimType = table.Column<string>(type: "longtext", nullable: true),
                    ClaimValue = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false),
                    ClaimType = table.Column<string>(type: "longtext", nullable: true),
                    ClaimValue = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "varchar(255)", nullable: false),
                    ProviderKey = table.Column<string>(type: "varchar(255)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "longtext", nullable: true),
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false),
                    RoleId = table.Column<string>(type: "varchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "varchar(255)", nullable: false),
                    LoginProvider = table.Column<string>(type: "varchar(255)", nullable: false),
                    Name = table.Column<string>(type: "varchar(255)", nullable: false),
                    Value = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CustomerPostingGroups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    ReceivablesAccountNo = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerPostingGroups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CustomerPostingGroups_GLAccounts_ReceivablesAccountNo",
                        column: x => x.ReceivablesAccountNo,
                        principalTable: "GLAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "GLEntries",
                columns: table => new
                {
                    EntryNo = table.Column<int>(type: "int", nullable: false),
                    GLAccountNo = table.Column<int>(type: "int", nullable: false),
                    PostingDate = table.Column<DateOnly>(type: "date", nullable: false),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    DocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false),
                    BalAccountType = table.Column<int>(type: "int", nullable: false),
                    BalAccountNo = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    UserId = table.Column<string>(type: "longtext", nullable: false),
                    Quantity = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    VATAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    JournalBatchName = table.Column<string>(type: "longtext", nullable: false),
                    GenPostingType = table.Column<int>(type: "int", nullable: false),
                    GenBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    GenProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    DebitAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    CreditAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    ExternalDocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    Reversed = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GLEntries", x => x.EntryNo);
                    table.ForeignKey(
                        name: "FK_GLEntries_GLAccounts_GLAccountNo",
                        column: x => x.GLAccountNo,
                        principalTable: "GLAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "GenJournalLines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    JournalTemplateName = table.Column<string>(type: "longtext", nullable: false),
                    JournalBatchName = table.Column<string>(type: "longtext", nullable: false),
                    LineNo = table.Column<int>(type: "int", nullable: false),
                    AccountType = table.Column<int>(type: "int", nullable: false),
                    AccountNo = table.Column<int>(type: "int", nullable: false),
                    PostingDate = table.Column<DateOnly>(type: "date", nullable: false),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    DocumentNo = table.Column<string>(type: "longtext", nullable: true),
                    Description = table.Column<string>(type: "longtext", nullable: true),
                    VATPercentage = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    BalAccountType = table.Column<int>(type: "int", nullable: false),
                    BalAccountNo = table.Column<int>(type: "int", nullable: false),
                    CurrencyCode = table.Column<string>(type: "longtext", nullable: true),
                    Amount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    DebitAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    CreditAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    AmountLCY = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    BalanceLCY = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    CurrencyFactor = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    AppliesToDocType = table.Column<int>(type: "int", nullable: false),
                    AppliesToDocNo = table.Column<string>(type: "longtext", nullable: true),
                    DueDate = table.Column<DateOnly>(type: "date", nullable: true),
                    Quantity = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    VATAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    AppliesToId = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    GenPostingType = table.Column<int>(type: "int", nullable: false),
                    GenBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    GenProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    BalGenPostingType = table.Column<int>(type: "int", nullable: false),
                    BalGenBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    BalGenProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    BalVATPercentage = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    BalVATAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    VATBaseAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    BalVATBaseAmount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    VATBaseAmountLCY = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    BalVATBaseAmountLCY = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: true),
                    ExternalDocumentNo = table.Column<string>(type: "longtext", nullable: true),
                    PostingNoSeries = table.Column<int>(type: "int", nullable: false),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    BalVATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    BalVATProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    Prepayment = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    PaymentMethodCode = table.Column<string>(type: "longtext", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenJournalLines", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GenJournalLines_GLAccounts_AccountNo",
                        column: x => x.AccountNo,
                        principalTable: "GLAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GenJournalLines_VATBusinessPostingGroups_BalVATBusPostingGro~",
                        column: x => x.BalVATBusPostingGroupId,
                        principalTable: "VATBusinessPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GenJournalLines_VATBusinessPostingGroups_VATBusPostingGroupId",
                        column: x => x.VATBusPostingGroupId,
                        principalTable: "VATBusinessPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GenJournalLines_VATProductPostingGroups_BalVATProdPostingGro~",
                        column: x => x.BalVATProdPostingGroupId,
                        principalTable: "VATProductPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GenJournalLines_VATProductPostingGroups_VATProdPostingGroupId",
                        column: x => x.VATProdPostingGroupId,
                        principalTable: "VATProductPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "VATEntries",
                columns: table => new
                {
                    EntryNo = table.Column<int>(type: "int", nullable: false),
                    GenBusPostringGroupId = table.Column<int>(type: "int", nullable: false),
                    GenProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    PostingDate = table.Column<DateOnly>(type: "date", nullable: false),
                    DocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    Type = table.Column<int>(type: "int", nullable: false),
                    Base = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    UserId = table.Column<string>(type: "longtext", nullable: false),
                    ClosedByEntryNo = table.Column<int>(type: "int", nullable: false),
                    Closed = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    ExternalDocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATBaseDiscountPercentage = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    DocumentDate = table.Column<DateOnly>(type: "date", nullable: false),
                    Reversed = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VATEntries", x => x.EntryNo);
                    table.ForeignKey(
                        name: "FK_VATEntries_VATBusinessPostingGroups_VATBusPostingGroupId",
                        column: x => x.VATBusPostingGroupId,
                        principalTable: "VATBusinessPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VATEntries_VATProductPostingGroups_VATProdPostingGroupId",
                        column: x => x.VATProdPostingGroupId,
                        principalTable: "VATProductPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "VATPostingSetups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATProdPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATPercentage = table.Column<decimal>(type: "decimal(9,2)", precision: 9, scale: 2, nullable: false),
                    SalesVATAccountId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VATPostingSetups", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VATPostingSetups_GLAccounts_SalesVATAccountId",
                        column: x => x.SalesVATAccountId,
                        principalTable: "GLAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VATPostingSetups_VATBusinessPostingGroups_VATBusPostingGroup~",
                        column: x => x.VATBusPostingGroupId,
                        principalTable: "VATBusinessPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VATPostingSetups_VATProductPostingGroups_VATProdPostingGroup~",
                        column: x => x.VATProdPostingGroupId,
                        principalTable: "VATProductPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false),
                    Email = table.Column<string>(type: "longtext", nullable: false),
                    PhoneNo = table.Column<string>(type: "longtext", nullable: false),
                    Address = table.Column<string>(type: "longtext", nullable: false),
                    TIN = table.Column<string>(type: "longtext", nullable: false),
                    CustomerPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    Blocked = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    GenBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    VATBusPostingGroupId = table.Column<int>(type: "int", nullable: false),
                    CreatedBy = table.Column<string>(type: "longtext", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedBy = table.Column<string>(type: "longtext", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Customers_CustomerPostingGroups_CustomerPostingGroupId",
                        column: x => x.CustomerPostingGroupId,
                        principalTable: "CustomerPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Customers_VATBusinessPostingGroups_VATBusPostingGroupId",
                        column: x => x.VATBusPostingGroupId,
                        principalTable: "VATBusinessPostingGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ApiHeaders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    DocumentType = table.Column<int>(type: "int", nullable: false),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    CustomerName = table.Column<string>(type: "longtext", nullable: false),
                    PostingDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false),
                    ExternalDocumentNo = table.Column<string>(type: "longtext", nullable: false),
                    CreatedBy = table.Column<string>(type: "longtext", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedBy = table.Column<string>(type: "longtext", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApiHeaders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ApiHeaders_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ApiHeaders_CustomerId",
                table: "ApiHeaders",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CustomerPostingGroups_ReceivablesAccountNo",
                table: "CustomerPostingGroups",
                column: "ReceivablesAccountNo");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_CustomerPostingGroupId",
                table: "Customers",
                column: "CustomerPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_VATBusPostingGroupId",
                table: "Customers",
                column: "VATBusPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GenJournalLines_AccountNo",
                table: "GenJournalLines",
                column: "AccountNo");

            migrationBuilder.CreateIndex(
                name: "IX_GenJournalLines_BalVATBusPostingGroupId",
                table: "GenJournalLines",
                column: "BalVATBusPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GenJournalLines_BalVATProdPostingGroupId",
                table: "GenJournalLines",
                column: "BalVATProdPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GenJournalLines_VATBusPostingGroupId",
                table: "GenJournalLines",
                column: "VATBusPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GenJournalLines_VATProdPostingGroupId",
                table: "GenJournalLines",
                column: "VATProdPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GLEntries_GLAccountNo",
                table: "GLEntries",
                column: "GLAccountNo");

            migrationBuilder.CreateIndex(
                name: "IX_VATEntries_VATBusPostingGroupId",
                table: "VATEntries",
                column: "VATBusPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_VATEntries_VATProdPostingGroupId",
                table: "VATEntries",
                column: "VATProdPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_VATPostingSetups_SalesVATAccountId",
                table: "VATPostingSetups",
                column: "SalesVATAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_VATPostingSetups_VATBusPostingGroupId",
                table: "VATPostingSetups",
                column: "VATBusPostingGroupId");

            migrationBuilder.CreateIndex(
                name: "IX_VATPostingSetups_VATProdPostingGroupId",
                table: "VATPostingSetups",
                column: "VATProdPostingGroupId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApiHeaders");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "CustomerLedgerEntries");

            migrationBuilder.DropTable(
                name: "GenJournalLines");

            migrationBuilder.DropTable(
                name: "GLEntries");

            migrationBuilder.DropTable(
                name: "Items");

            migrationBuilder.DropTable(
                name: "NoSeries");

            migrationBuilder.DropTable(
                name: "VATEntries");

            migrationBuilder.DropTable(
                name: "VATPostingSetups");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "VATProductPostingGroups");

            migrationBuilder.DropTable(
                name: "CustomerPostingGroups");

            migrationBuilder.DropTable(
                name: "VATBusinessPostingGroups");

            migrationBuilder.DropTable(
                name: "GLAccounts");
        }
    }
}
