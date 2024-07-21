using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Api.Authentication;
using Api.Models;

namespace Api;

public class ApiDbContext(DbContextOptions<ApiDbContext> options) : IdentityDbContext<ApplicationUser>(options)
{

    protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
    {
        configurationBuilder.Properties<decimal>()
            .HavePrecision(9, 2)
            .HaveAnnotation("DefaultValue", 0);

        configurationBuilder.Properties<int>()
                  .HaveAnnotation("DefaultValue", 0);

        configurationBuilder.Properties<string>()
        .HaveAnnotation("DefaultValue", "");

        configurationBuilder.Properties<bool>()
            .HaveAnnotation("DefaultValue", false);

    }


    public DbSet<Customer> Customers { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<ApiHeader> ApiHeaders { get; set; }

    public DbSet<GLAccount> GLAccounts { get; set; }
    public DbSet<GLEntry> GLEntries { get; set; }
    public DbSet<GenJournalLine> GenJournalLines { get; set; }
    public DbSet<VATBusinessPostingGroup> VATBusinessPostingGroups { get; set; }
    public DbSet<VATProductPostingGroup> VATProductPostingGroups { get; set; }
    public DbSet<VATPostingSetup> VATPostingSetups { get; set; }
    public DbSet<VATEntry> VATEntries { get; set; }
    public DbSet<CustomerPostingGroup> CustomerPostingGroups { get; set; }
    public DbSet<CustomerLedgerEntry> CustomerLedgerEntries { get; set; }
    public DbSet<NoSeries> NoSeries { get; set; }


}