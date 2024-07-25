using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;


namespace Api.Models
{
    [Index(nameof(No), IsUnique = true)]
    [Index(nameof(Name), IsUnique = true)]
    public class GLAccount : Model
    {
        public string No { get; set; } = "";
        public string Name { get; set; } = "";
        public GLAccountType? AccountType { get; set; }
        public GLAccountCategory? AccountCategory { get; set; }
        public GLIncomeOrBalance IncomeOrBalance { get; set; }
        public GLDebitOrCredit DebitOrCredit { get; set; }
        public bool Blocked { get; set; }
        public bool DirectPosting { get; set; }
        public GLGeneralPostingType GenPostingType { get; set; }
        [ForeignKey(nameof(GeneralBusinessPostingGroup))]
        public Guid GeneralBusinessPostingGroupId { get; set; }
        [ForeignKey(nameof(GeneralProductPostingGroup))]
        public Guid GeneralProductPostingGroupId { get; set; }

        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusinessPostingGroupId { get; set; }
        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProductPostingGroupId { get; set; }




        public virtual GeneralBusinessPostingGroup? GeneralBusinessPostingGroup { get; set; }
        public virtual GeneralProductPostingGroup? GeneralProductPostingGroup { get; set; }
        public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
        public virtual VATProductPostingGroup? VATProductPostingGroup { get; set; }

    }
}