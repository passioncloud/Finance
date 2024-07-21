using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Rest.ClientRuntime.Azure.Authentication.Utilities;
using Api.Enums;


namespace Api.Models
{
    [Index(nameof(VATBusinessPostingGroupId),nameof(VATProductPostingGroupId), IsUnique = true)]
    public class GeneralPostingSetup : Model
    {
        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusinessPostingGroupId { get; set; }
        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProductPostingGroupId { get; set; }

        [ForeignKey(nameof(SalesGLAccount))]
        public Guid SalesGLAccountId { get; set; }

        
        public string Description { get; set; } = "";


        public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
        public virtual VATProductPostingGroup? VATProductPostingGroup { get; set; }

        public virtual GLAccount? SalesGLAccount { get; set; }

        public Guid GetSalesGLAccount()
        {
            // Check.NotEmptyNotNull(SalesVATAccountId);
            return SalesGLAccountId;
        }

    }
}