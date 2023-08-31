using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Faculty
{
    [Key]
    [StringLength(5, ErrorMessage = "FacultyID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^F.*", ErrorMessage = "FacultyID must start with F")]
    public string FacultyId { get; set; } = null!;

    [Required(ErrorMessage = "First Name is Required")]
    [StringLength(50, ErrorMessage = "FirstName Length Cannot Exceeds 50 Characters")]
    public string FirstName { get; set; } = null!;
    [StringLength(50, ErrorMessage = "LastName Length Cannot Exceeds 50 Characters")]
    public string? LastName { get; set; }
    [Required(ErrorMessage = "Gender is Required")]
    [RegularExpression(@"^(Male|Female|Other)$", ErrorMessage = "Invalid Gender")]
    public string? Gender { get; set; }
    [Required(ErrorMessage = "Contact Number is Required")]
    [RegularExpression(@"[0-9]{10}", ErrorMessage = "Invalid Contact")]
    public string? ContactNumber { get; set; }
    [Required(ErrorMessage = "Email is Required")]
    //[RegularExpression(@"^.* 0%. .$", ErrorMessage = "Invalid Email")]
    [EmailAddress]
    [StringLength(255)]
    public string? Email { get; set; }
    [Required]
    public string DepartmentId { get; set; } = null!;
    [Required]
    public string CourseId { get; set; } = null!;

    public virtual Course? Course { get; set; } = null!;

    public virtual Department? Department { get; set; } = null!;
}
