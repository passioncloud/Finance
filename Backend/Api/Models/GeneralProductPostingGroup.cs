using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Enums;
using Microsoft.EntityFrameworkCore;


namespace Api.Models
{

    [Index(nameof(Description), IsUnique = true)]
    public class GeneralProductPostingGroup : Model
    {
        public string Description { get; set; } = "";
    }
}