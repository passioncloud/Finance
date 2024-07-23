using System.ComponentModel.DataAnnotations;

namespace Api.Models;

public class NoSeries  : Model
{
    public string Name { get;set; } = "";
    public string StartNo { get;set;} = "";
    public string LastUsedNo { get;set;} = "";

}