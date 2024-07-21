using System.ComponentModel.DataAnnotations;
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
        public GLGenPostingType GenPostingType { get; set; }
        public int GenBusPostingGroupId { get; set; } 
        public int GenProdPostingGroupId { get; set; } 

        public int VATBusPostingGroupId { get; set; } 
        public int VATProdPostingGroupId { get; set; } 

    }
}