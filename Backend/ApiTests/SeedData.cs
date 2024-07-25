using Api;
using Api.Models;

namespace ApiTests;


public class SeedData(ApiDbContext apiDbContext)
{
    public void PopulateSeedData()
    {
        PopulateVATBusinessPostingGroups();
        PopulateVATProductPostingGroups();
        PopulateGeneralBusinessPostingGroups();
        PopulateGeneralProductPostingGroups();
        apiDbContext.SaveChanges();
        PopulateGLAccounts();
        apiDbContext.SaveChanges();
        PopulateVATPostingSetups();
        apiDbContext.SaveChanges();
        PopulateGeneralPostingSetups();
        apiDbContext.SaveChanges();
    }

    private void PopulateGeneralPostingSetups()
    {
        GeneralBusinessPostingGroup domesticGeneralBus = apiDbContext.GeneralBusinessPostingGroups.Single(v => v.Description == "Domestic");
        GeneralProductPostingGroup domesticGeneralProd = apiDbContext.GeneralProductPostingGroups.Single(v => v.Description == "Domestic");
        GLAccount salesAccount = apiDbContext.GLAccounts.Single(g => g.No == "300105");
        GeneralPostingSetup domesticGeneralPostingSetup = new()
        {
            GeneralBusinessPostingGroupId = domesticGeneralBus.Id,
            GeneralProductPostingGroupId = domesticGeneralProd.Id,
            Description = "Domestic",
            SalesGLAccountId = salesAccount.Id
        };
        apiDbContext.GeneralPostingSetups.AddRange(domesticGeneralPostingSetup);
    }

    private void PopulateVATPostingSetups()
    {
        VATBusinessPostingGroup domesticVATBus = apiDbContext.VATBusinessPostingGroups.Single(v => v.Description == "Domestic");
        VATProductPostingGroup exemptVATProd = apiDbContext.VATProductPostingGroups.Single(v => v.Description == "Exempt");
        VATProductPostingGroup vatableVATProd = apiDbContext.VATProductPostingGroups.Single(v => v.Description == "Vatable");
        GLAccount vatAccount = apiDbContext.GLAccounts.Single(g => g.No == "200419");
        VATPostingSetup exemptVATPostingSetup = new()
        {
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = exemptVATProd.Id,
            Description = "Exempt",
            VATPercentage = 0,
            SalesVATAccountId = vatAccount.Id
        };
        VATPostingSetup vatableVATPostingSetup = new()
        {
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = vatableVATProd.Id,
            Description = "Vatable",
            VATPercentage = 18,
            SalesVATAccountId = vatAccount.Id
        };
        apiDbContext.VATPostingSetups.AddRange(exemptVATPostingSetup, vatableVATPostingSetup);
    }

    private void PopulateGLAccounts()
    {
        VATBusinessPostingGroup domesticVATBus = apiDbContext.VATBusinessPostingGroups.Single(v => v.Description == "Domestic");
        VATProductPostingGroup exemptVATProd = apiDbContext.VATProductPostingGroups.Single(v => v.Description == "Exempt");
        GeneralBusinessPostingGroup domesticGeneralBus = apiDbContext.GeneralBusinessPostingGroups.Single(v => v.Description == "Domestic");
        GeneralProductPostingGroup domesticGeneralProd = apiDbContext.GeneralProductPostingGroups.Single(v => v.Description == "Domestic");

        GLAccount cashGLAccount = new()
        {
            No = "100101",
            Name = "Petty Cash",
            IncomeOrBalance = Api.Enums.GLIncomeOrBalance.BalanceSheet,
            AccountCategory = Api.Enums.GLAccountCategory.Assets,
            DebitOrCredit = Api.Enums.GLDebitOrCredit.Both,
            AccountType = Api.Enums.GLAccountType.Posting,
            DirectPosting = true,
            GeneralBusinessPostingGroupId = domesticGeneralBus.Id,
            GeneralProductPostingGroupId = domesticGeneralProd.Id,
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = exemptVATProd.Id,
        };
        GLAccount vatAccount = new()
        {
            Name = "VAT Payable/Receivable",
            No = "200419",
            IncomeOrBalance = Api.Enums.GLIncomeOrBalance.BalanceSheet,
            AccountCategory = Api.Enums.GLAccountCategory.Liabilities,
            DebitOrCredit = Api.Enums.GLDebitOrCredit.Both,
            AccountType = Api.Enums.GLAccountType.Posting,
            DirectPosting = true,
            GeneralBusinessPostingGroupId = domesticGeneralBus.Id,
            GeneralProductPostingGroupId = domesticGeneralProd.Id,
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = exemptVATProd.Id,
        };
        GLAccount salesGLAccount = new()
        {
            No = "300105",
            Name = "Miscellaneous Sales",
            IncomeOrBalance = Api.Enums.GLIncomeOrBalance.IncomeStatement,
            AccountCategory = Api.Enums.GLAccountCategory.Income,
            DebitOrCredit = Api.Enums.GLDebitOrCredit.Both,
            AccountType = Api.Enums.GLAccountType.Posting,
            DirectPosting = true,
            GeneralBusinessPostingGroupId = domesticGeneralBus.Id,
            GeneralProductPostingGroupId = domesticGeneralProd.Id,
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = exemptVATProd.Id,
        };
        GLAccount expensesGLAccount = new()
        {
            No = "400405",
            Name = "Transport and Fuel Expenses",
            IncomeOrBalance = Api.Enums.GLIncomeOrBalance.IncomeStatement,
            AccountCategory = Api.Enums.GLAccountCategory.Expense,
            DebitOrCredit = Api.Enums.GLDebitOrCredit.Both,
            AccountType = Api.Enums.GLAccountType.Posting,
            DirectPosting = true,
            GeneralBusinessPostingGroupId = domesticGeneralBus.Id,
            GeneralProductPostingGroupId = domesticGeneralProd.Id,
            VATBusinessPostingGroupId = domesticVATBus.Id,
            VATProductPostingGroupId = exemptVATProd.Id,
        };
        apiDbContext.GLAccounts.AddRange(cashGLAccount, vatAccount, salesGLAccount, expensesGLAccount);
    }

    private void PopulateVATBusinessPostingGroups()
    {
        VATBusinessPostingGroup domestic = new() { Description = "Domestic" };
        VATBusinessPostingGroup foreign = new() { Description = "Foreigner" };
        apiDbContext.VATBusinessPostingGroups.AddRange(domestic, foreign);
    }
    private void PopulateVATProductPostingGroups()
    {
        VATProductPostingGroup vatable = new() { Description = "Vatable" };
        VATProductPostingGroup exempt = new() { Description = "Exempt" };
        VATProductPostingGroup zeroRated = new() { Description = "Zero Rated" };
        apiDbContext.VATProductPostingGroups.AddRange(vatable, exempt, zeroRated);
    }

    private void PopulateGeneralBusinessPostingGroups()
    {
        GeneralBusinessPostingGroup domestic = new() { Description = "Domestic" };
        GeneralBusinessPostingGroup foreign = new() { Description = "Foreigner" };
        apiDbContext.GeneralBusinessPostingGroups.AddRange(domestic, foreign);
    }
    private void PopulateGeneralProductPostingGroups()
    {
        GeneralProductPostingGroup domestic = new() { Description = "Domestic" };
        apiDbContext.GeneralProductPostingGroups.AddRange(domestic);
    }
}