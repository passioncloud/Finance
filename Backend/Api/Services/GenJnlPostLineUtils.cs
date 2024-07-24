using Api;
using Api.Models;
using Api.Enums;

namespace Api.Services
{
    public class GeneralJournalPostLineUtils(ApiDbContext apiDbContext)
    {
        public int GetNextGLEntryNo()
        {
            GLEntry? lastGLEntry = apiDbContext.GLEntries.OrderBy(g => g.EntryNo).LastOrDefault();
            return 1 + (lastGLEntry?.EntryNo ?? 0);
        }

        public int GetNextVATEntryNo()
        {
            VATEntry? lastGLEntry = apiDbContext.VATEntries.OrderBy(g => g.EntryNo).LastOrDefault();
            return 1 + (lastGLEntry?.EntryNo ?? 0);
        }

        public GLAccount GetGLAccountById(Guid Id)
        {
            Console.WriteLine($"GetGLAccountById {Id}");
            GLAccount? result = apiDbContext.GLAccounts.Find(Id) ?? throw new Exception($"Failed to find GL Account with Id {Id}");
            return result;
        }

        public VATPostingSetup GetVATPostingSetup(Guid VATBusinessPostingGroupId, Guid VATProductPostingGroupId)
        {
            return apiDbContext.VATPostingSetups
                .FirstOrDefault(v => v.VATBusinessPostingGroupId == VATBusinessPostingGroupId && v.VATProductPostingGroupId == VATProductPostingGroupId)
                ?? throw new Exception($"Failed to find VATPostingSetup with VAT Business Posting Group Id {VATBusinessPostingGroupId} and VAT Product Posting Group Id {VATProductPostingGroupId}");
        }

        public VATPostingSetup GetVATPostingSetup(GeneralJournalLine genJournalLine)
        {
            return apiDbContext.VATPostingSetups
            .FirstOrDefault(v => v.VATBusinessPostingGroupId == genJournalLine.VATBusinessPostingGroupId && v.VATProductPostingGroupId == genJournalLine.VATProductPostingGroupId)
                 ?? throw new Exception($"Failed to find VATPostingSetup with VAT Business Posting Group Id {genJournalLine.VATBusinessPostingGroupId} and VAT Product Posting Group Id {genJournalLine.VATProductPostingGroupId}");

        }
    }
}