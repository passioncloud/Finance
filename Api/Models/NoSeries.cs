using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class NoSeries 
{
    [Key]
    public string No { get;set;} = "";
    public string Name { get;set; } = "";
    public string StartNo { get;set;} = "";
    public string LastUsedNo { get;set;} = "";

}