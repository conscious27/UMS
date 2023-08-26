using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class User
{
    [Key]
    [StringLength(5, ErrorMessage = "AdminID Length Cannot Exceeds 5 Character")]
    public string UserId { get; set; } = null!;
    [Required(ErrorMessage = "User Name is Required")]
    [StringLength(50, ErrorMessage = "UserName Length Cannot Exceeds 50 Characters")]
    public string Username { get; set; } = null!;
    [Required(ErrorMessage = "Password is Required")]
    [DataType(DataType.Password)]
    public string Password { get; set; } = null!;
    [Required(ErrorMessage = "Role Should be Defined")]
    [RegularExpression(@"^(Admin|Student|Faculty)$", ErrorMessage = "Invalid Role")]
    public string? Role { get; set; }
}
