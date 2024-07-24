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
        int nextEntryNo = generalJournalPostLineUtils.GetNextGLEntryNo();
        // Then
        Assert.Equal(1, nextEntryNo);
    }

    [Fact]
    public void ReturnsOnePlusLastEntryNo()
    {
        // Given
        GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);
        apiDbContext.GLEntries.AddRange(new GLEntry() { EntryNo = 30 }, new() { EntryNo = 50 }, new() { EntryNo = 10 });
        apiDbContext.SaveChanges();

        // When
        int nextEntryNo = generalJournalPostLineUtils.GetNextGLEntryNo();
        // Then
        Assert.Equal(501, nextEntryNo);

    }

}