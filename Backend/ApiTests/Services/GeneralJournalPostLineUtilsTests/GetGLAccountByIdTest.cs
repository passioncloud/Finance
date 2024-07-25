using Api;
using Api.Models;
using Api.Services;

namespace ApiTests.Services.GeneralJournalPostLineUtilsTests;

public class GetGLAccountByIdTest() : IClassFixture<TestDatabaseFixture>
{
    readonly static ApiDbContext apiDbContext = TestDatabaseFixture.CreateContext();
    readonly GeneralJournalPostLineUtils generalJournalPostLineUtils = new(apiDbContext);


    [Fact]
    public void ReturnsCorrectGLAccount()
    {
        // Given
        apiDbContext.GLAccounts.RemoveRange(apiDbContext.GLAccounts);
        VATPostingSetup vATPostingSetup = apiDbContext.VATPostingSetups.First();
        GeneralPostingSetup generalPostingSetup = apiDbContext.GeneralPostingSetups.First();
        Guid guid = Guid.NewGuid();
        apiDbContext.GLAccounts.AddRange(
            new GLAccount()
            {
                No = "10",
                Name = "A1",
                VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
                VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
                GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
                GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
            },
             new GLAccount()
             {
                 Id = guid,
                 No = "11",
                 Name = "A2",
                 VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
                 VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
                 GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
                 GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
             },
             new GLAccount()
             {
                 No = "13",
                 Name = "A3",
                 VATBusinessPostingGroupId = vATPostingSetup.VATBusinessPostingGroupId,
                 VATProductPostingGroupId = vATPostingSetup.VATProductPostingGroupId,
                 GeneralBusinessPostingGroupId = generalPostingSetup.GeneralBusinessPostingGroupId,
                 GeneralProductPostingGroupId = generalPostingSetup.GeneralProductPostingGroupId,
             }
        );
        apiDbContext.SaveChanges();

        // When
        GLAccount gLAccount = generalJournalPostLineUtils.GetGLAccountById(guid);

        // Then
        Assert.Equal(guid, gLAccount.Id);
    }

    [Fact]
    public void ThrowsIfNoGLAccountWithGivenGuidIsFound()
    {
        // Given
        apiDbContext.GLAccounts.RemoveRange(apiDbContext.GLAccounts);
        Guid guid = Guid.NewGuid();

        // Then
        Assert.Throws<Exception>(() =>
        {
            // When
            generalJournalPostLineUtils.GetGLAccountById(guid);
        });

    }
}
