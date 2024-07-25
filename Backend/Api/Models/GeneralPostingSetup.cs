using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Rest.ClientRuntime.Azure.Authentication.Utilities;
using Api.Enums;


namespace Api.Models
{
    [Index(nameof(GeneralBusinessPostingGroupId),nameof(GeneralProductPostingGroupId), IsUnique = true)]
    public class GeneralPostingSetup : Model
    {
        [ForeignKey(nameof(GeneralBusinessPostingGroup))]
        public Guid GeneralBusinessPostingGroupId { get; set; }
        [ForeignKey(nameof(GeneralProductPostingGroup))]
        public Guid GeneralProductPostingGroupId { get; set; }

        [ForeignKey(nameof(SalesGLAccount))]
        public Guid SalesGLAccountId { get; set; }

        
        public string Description { get; set; } = "";


        public virtual GeneralBusinessPostingGroup? GeneralBusinessPostingGroup { get; set; }
        public virtual GeneralProductPostingGroup? GeneralProductPostingGroup { get; set; }

        public virtual GLAccount? SalesGLAccount { get; set; }

        public Guid GetSalesGLAccount()
        {
            // Check.NotEmptyNotNull(SalesGeneralAccountId);
            return SalesGLAccountId;
        }

    }
}