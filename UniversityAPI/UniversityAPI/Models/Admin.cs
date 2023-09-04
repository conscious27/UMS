using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Admin
{
    [Key]
    [StringLength(5, ErrorMessage = "AdminID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^A*", ErrorMessage = "AdminID must start with A")]
    public string AdminId { get; set; } = null!;
    [Required(ErrorMessage = "First Name is Required")]
    [StringLength(50, ErrorMessage = "FirstName Length Cannot Exceeds 50 Characters")]
    public string FirstName { get; set; } = null!;
    [StringLength(50, ErrorMessage = "LastName Length Cannot Exceeds 50 Characters")]
    public string? LastName { get; set; }
    [Required(ErrorMessage = "Gender is Required")]
    [RegularExpression(@"^(Male|Female|Other)$", ErrorMessage = "Invalid Gender")]
    public string? Gender { get; set; }
    [Required(ErrorMessage = "Contact Number is Required")]
    [Phone(ErrorMessage = "Invalid Phone")]
    public string? ContactNumber { get; set; }
    [Required(ErrorMessage = "Email is Required")]
    [EmailAddress(ErrorMessage = "Invalid Email")]
    [StringLength(255)]
    public string? Email { get; set; }
}
