using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using Api.Enums;
using Microsoft.EntityFrameworkCore;


namespace Api.Models
{
    [Index(nameof(Description), IsUnique = true)]
    public class GeneralBusinessPostingGroup : Model
    {
        public string Description { get; set; } = "";
    }
}