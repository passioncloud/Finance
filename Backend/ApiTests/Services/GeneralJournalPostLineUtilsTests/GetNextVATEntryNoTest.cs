using Api;
using Api.Models;
using Api.Services;

namespace ApiTests.Services.GeneralJournalPostLineUtilsTests;


public class GetNextVATEntryNoTest() : IClassFixture<TestDatabaseFixture>
{
    readonly static ApiDbContext apiDbContext = TestDatabaseFixture.CreateContext();
    readonly GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);
    [Fact]
    public void ReturnsOneIfNoVATEntryExists()
    {
        // Given
        apiDbContext.VATEntries.RemoveRange(apiDbContext.VATEntries);
        // When
        int nextVATEntryNo = generalJournalPostLineUtils.GetNextVATEntryNo();
        // Then
        Assert.Equal(1, nextVATEntryNo);
    }


    [Fact]
    public void ReturnsOnePlusLastEntryNo()
    {
        // Given
        apiDbContext.VATEntries.RemoveRange(apiDbContext.VATEntries);
        VATPostingSetup vATPostingSetup = apiDbContext.VATPostingSetups.First();
        GeneralPostingSetup generalPostingSetup = apiDbContext.GeneralPostingSetups.First();
        apiDbContext.VATEntries.AddRange(new()
        {
            EntryNo = 10,
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostringGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        },
        new()
        {
            EntryNo = 15,
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostringGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        },
        new()
        {
            EntryNo = 5,
            VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
            VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
            GeneralBusinessPostringGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
            GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
        }
        );
        apiDbContext.SaveChanges();

        // When
        var nextVATEntryNo = generalJournalPostLineUtils.GetNextVATEntryNo();

        // Then
        Assert.Equal(16, nextVATEntryNo);
    }
}