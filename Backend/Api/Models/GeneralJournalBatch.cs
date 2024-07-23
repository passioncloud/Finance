using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;


namespace Api.Models
{

    [Index(nameof(Description), IsUnique = true)]
    public class GeneralJournalBatch : Model
    {
        [ForeignKey(nameof(GeneralJournalTemplate))]
        public Guid GeneralJournalTemplateId { get;set; }
        public string Description { get; set; } = "";

        

        public virtual GeneralJournalTemplate? GeneralJournalTemplate { get;set;}
        
        
        
    }
}