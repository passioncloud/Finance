using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;


namespace Api.Models
{
   
    public class CustomerPostingGroup : Model
    {

        [ForeignKey(nameof(ReceivablesGLAccount))]
        public Guid ReceivablesAccountId { get;set;}

        public string Description { get;set; } = "";


        public virtual GLAccount? ReceivablesGLAccount { get;set;}
        
    }
}