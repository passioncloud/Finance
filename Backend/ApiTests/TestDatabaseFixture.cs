using Api;
using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiTests;

public class TestDatabaseFixture
{
    private const string ConnectionString = @$"Database=financeTest; Host=localhost; Username=postgres;Password=stanislav100;Include Error Detail=true";
    private static readonly object _lock = new();
    private static bool _databaseInitialized;


    public TestDatabaseFixture()
    {
        lock (_lock)
        {
            if (!_databaseInitialized)
            {
                using ApiDbContext context = CreateContext();
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                SeedData seedData = new (context);
                seedData.PopulateSeedData();
                context.SaveChanges();
                _databaseInitialized = true;
            }
        }
    }

    public ApiDbContext CreateContext() => new ApiDbContext(
        new DbContextOptionsBuilder<ApiDbContext>()
            .UseNpgsql(ConnectionString)
            .UseSnakeCaseNamingConvention()
            .Options
    );





}