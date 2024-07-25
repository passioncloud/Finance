using Api;

namespace ApiTests;

public class VATBusinessPostingGroupControllerTest : IClassFixture<TestDatabaseFixture>
{
    public VATBusinessPostingGroupControllerTest(TestDatabaseFixture testDatabaseFixture)
    {
        Fixture = testDatabaseFixture;
    }

    public TestDatabaseFixture Fixture { get; }


    [Fact]
    public void GetVATBusinessPostingGroupCount()
    {
        using ApiDbContext context = Fixture.CreateContext();
        int vatGroupCount =  context.VATBusinessPostingGroups.Count();
        Console.WriteLine($"Count is {vatGroupCount}");
        Assert.Equal(2, vatGroupCount);
    }
}