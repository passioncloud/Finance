using Api;
using Api.Models;
using Api.Services;

namespace ApiTests.Services.GeneralJournalPostLineUtilsTests;

public class GetNextGLEntryNoTest() : IClassFixture<TestDatabaseFixture>
{
    readonly static ApiDbContext apiDbContext = TestDatabaseFixture.CreateContext();
    readonly GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);

    [Fact]
    public void ReturnsOneIfNoGLEntryExists()
    {
        // Given        

        // When
        apiDbContext.GLEntries.RemoveRange(apiDbContext.GLEntries);
        apiDbContext.SaveChanges();
        int nextEntryNo = generalJournalPostLineUtils.GetNextGLEntryNo();
        // Then
        Assert.Equal(1, nextEntryNo);
    }

    [Fact]
    public void ReturnsOnePlusLastEntryNo()
    {
        // Given        
        apiDbContext.GLEntries.RemoveRange(apiDbContext.GLEntries);
        apiDbContext.SaveChanges();
        GLAccount gLAccount = apiDbContext.GLAccounts.First();
        VATPostingSetup vATPostingSetup = apiDbContext.VATPostingSetups.First();
        GeneralPostingSetup generalPostingSetup = apiDbContext.GeneralPostingSetups.First();
        apiDbContext.GLEntries.AddRange(new GLEntry()
        {
            EntryNo = 30,
            GLAccountId = gLAccount.Id,
            Amount = 100,
            Description = "Test",
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        }, new()
        {
            EntryNo = 50,
            GLAccountId = gLAccount.Id,
            Amount = 100,
            Description = "Test",
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        }, new()
        {
            EntryNo = 10,
            GLAccountId = gLAccount.Id,
            Amount = 100,
            Description = "Test",
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        });
        apiDbContext.SaveChanges();

        // When
        int nextEntryNo = generalJournalPostLineUtils.GetNextGLEntryNo();
        // Then
        Assert.Equal(51, nextEntryNo);

    }

}