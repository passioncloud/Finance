using Api;
using Api.Models;
using Api.Services;

namespace ApiTests.Services.GeneralJournalPostLineUtilsTests;

public class GetNextGLEntryNoTest(TestDatabaseFixture Fixture) : IClassFixture<TestDatabaseFixture>
{
    readonly ApiDbContext apiDbContext = Fixture.CreateContext();

    [Fact]
    public void ReturnsOneIfNoGLEntryExists()
    {
        // Given        
        GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);
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
        GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);
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