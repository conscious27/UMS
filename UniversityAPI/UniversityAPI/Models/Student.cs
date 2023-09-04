using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Xml.Serialization;

namespace UniversityAPI.Models;

public partial class Student
{
    [Key]
    [StringLength(5, ErrorMessage = "StudentID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^S*", ErrorMessage = "StudentID must start with S")]
    public string StudentId { get; set; } = null!;
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
    [Required(ErrorMessage = "DateOfBirth is Required")]
    public DateTime DateOfBirth { get; set; }
    [Required(ErrorMessage = "DepartmentID is Required")]
    public string DepartmentId { get; set; } = null!;
    [Required(ErrorMessage = "BranchID is Required")]
    public string BranchId { get; set; } = null!;
    [Required(ErrorMessage = "EnrollmentDate is Required")]
    public DateTime EnrollmentDate { get; set; }
    [Required(ErrorMessage = "SAddress is Required")]
    [StringLength(100,ErrorMessage = "SAddress Length Cannot Exceed 100 Characters")]
    public string Saddress { get; set; } = null!;
    [Required(ErrorMessage = "Semester Cannot be Empty")]
    [Range(1, 8, ErrorMessage = "Semester Cannot be Greater than 8 and less than 1")]
    public int Semester { get; set; }

    public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();

    public virtual Branch? Branch { get; set; } = null!;

    public virtual Department? Department { get; set; } = null!;

    public virtual ICollection<Result> Results { get; set; } = new List<Result>();
    public virtual ICollection<CourseReg> CourseRegs { get; set; } = new List<CourseReg>();
}
