using Api;
using Api.Models;
using Api.Enums;

namespace Api.Services
{
    public class GenJnlPostLineUtils(ApiDbContext apiDbContext)
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
            return apiDbContext.GLAccounts.Find(Id);
        }

        public VATPostingSetup GetVATPostingSetup(Guid VATBusPostingGroup, Guid VATProdPostingGroup)
        {
            return apiDbContext.VATPostingSetups.First(v => v.VATBusinessPostingGroupId == VATBusPostingGroup && v.VATProductPostingGroupId == VATProdPostingGroup);
        }

        public VATPostingSetup GetVATPostingSetup(GenJournalLine genJournalLine)
        {
            return apiDbContext.VATPostingSetups.First(v => v.VATBusinessPostingGroupId == genJournalLine.VATBusPostingGroupId && v.VATProductPostingGroupId == genJournalLine.VATProdPostingGroupId);
        }
    }
}