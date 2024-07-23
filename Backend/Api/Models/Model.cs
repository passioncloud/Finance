using System.ComponentModel.DataAnnotations;

namespace Api.Models;


public class Model  
{
    [Key]
    public Guid Id { get;set; }
}