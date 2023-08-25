using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Department
{
    [Key]
    [StringLength(5,ErrorMessage= "DepartmentID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^D.*",ErrorMessage = "DepartmentID must start with D")]
    public string DepartmentId { get; set; } = null!;

    [Required(ErrorMessage = "Department Name is Required")]
    [StringLength(50, ErrorMessage = "DepartmentName must not Exceed 50 Characters")]
    public string DepartmentName { get; set; } = null!;
    [Required(ErrorMessage = "Contact Number is Required")]
    [RegularExpression(@"[0-9]{10}", ErrorMessage = "Invalid Contact")]
    public string? ContactNumber { get; set; }

    public virtual ICollection<Branch> Branches { get; set; } = new List<Branch>();

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();

    public virtual ICollection<Faculty> Faculties { get; set; } = new List<Faculty>();

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
