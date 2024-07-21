using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Api.Models;


[Index(nameof(Name), IsUnique =true)]
public class Customer : Model
{

  public string Name { get; set; }
  public string Email { get; set; }
  public string PhoneNo { get; set; }
  public string Address { get; set; }
  public string TIN { get; set; }

  [ForeignKey(nameof(CustomerPostingGroup))]
  public int CustomerPostingGroupId{ get; set; }
  public bool Blocked { get; set; }
  public int GenBusPostingGroupId { get; set; } 
  [ForeignKey(nameof(VATBusinessPostingGroup))]
  public int VATBusPostingGroupId { get; set; } 
  public string CreatedBy { get; set; }
  public DateTime CreatedAt { get; set; }
  public string UpdatedBy { get; set; }
  public DateTime UpdatedAt { get; set; }


  public CustomerPostingGroup? CustomerPostingGroup { get; set; }
  public virtual VATBusinessPostingGroup? VATBusinessPostingGroup { get; set; }
}


