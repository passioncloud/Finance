using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.Rest.ClientRuntime.Azure.Authentication.Utilities;
using Api.Enums;


namespace Api.Models
{
    [Index(nameof(VATBusinessPostingGroupId),nameof(VATProductPostingGroupId), IsUnique = true)]
    public class VATPostingSetup : Model
    {
        [ForeignKey(nameof(VATBusinessPostingGroup))]
        public Guid VATBusinessPostingGroupId { get; set; }
        [ForeignKey(nameof(VATProductPostingGroup))]
        public Guid VATProductPostingGroupId { get; set; }
        public decimal VATPercentage { get; set; }

        [ForeignKey(nameof(SalesVATGLAccount))]
        public Guid SalesVATAccountId { get; set; }
        public string Description { get; set; } = "";


        public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
        public virtual VATProductPostingGroup? VATProductPostingGroup { get; set; }

        public virtual GLAccount? SalesVATGLAccount { get; set; }

        public Guid GetSalesAccount()
        {
            // Check.NotEmptyNotNull(SalesVATAccountId);
            return SalesVATAccountId;
        }

    }
}