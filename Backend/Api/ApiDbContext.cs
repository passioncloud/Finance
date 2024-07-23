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
    public DbSet<SalesHeader> SalesHeaders { get; set; }

    public DbSet<GLAccount> GLAccounts { get; set; }
    public DbSet<GLEntry> GLEntries { get; set; }
    public DbSet<GeneralJournalLine> GenJournalLines { get; set; }
      public DbSet<GeneralBusinessPostingGroup> GeneralBusinessPostingGroups { get; set; }
    public DbSet<GeneralProductPostingGroup> GeneralProductPostingGroups { get; set; }
    public DbSet<GeneralPostingSetup> GeneralPostingSetups { get; set; }
    
    public DbSet<VATBusinessPostingGroup> VATBusinessPostingGroups { get; set; }
    public DbSet<VATProductPostingGroup> VATProductPostingGroups { get; set; }
    public DbSet<VATPostingSetup> VATPostingSetups { get; set; }
    public DbSet<VATEntry> VATEntries { get; set; }
    public DbSet<CustomerPostingGroup> CustomerPostingGroups { get; set; }
    public DbSet<CustomerLedgerEntry> CustomerLedgerEntries { get; set; }
    public DbSet<NoSeries> NoSeries { get; set; }
    public DbSet<GeneralJournalBatch> GeneralJournalBatches { get;set;}
    public DbSet<GeneralJournalTemplate> GeneralJournalTemplates { get;set; }


}