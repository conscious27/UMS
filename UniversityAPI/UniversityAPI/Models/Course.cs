using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Course
{
    [Key]
    [StringLength(5, ErrorMessage = "CourseID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^C.*", ErrorMessage = "Course must start with C")]
    public string CourseId { get; set; } = null!;
    [Required(ErrorMessage = "CourseCode is Required")]
    [StringLength(7, ErrorMessage = "CourseID Length Cannot Exceeds 5 Characters")]
    public string CourseCode { get; set; } = null!;
    [Required(ErrorMessage = "CousreName is Required")]
    [StringLength(50, ErrorMessage = "CourseName Length Cannot Exceed 50 Characters")]
    public string CourseName { get; set; } = null!;
    [Required(ErrorMessage = "Credits is Required")]
    [Range(1, 10, ErrorMessage = "Credit must be from 1 to 10")]
    public int Credits { get; set; }
    [Required(ErrorMessage = "DepartmentID is Required")]
    public string DepartmentId { get; set; } = null!;
    public string? Syllabus { get; set; }
    [StringLength(200, ErrorMessage = "Description Length Cannot Exceed 200 Characters")]
    public string? Description { get; set; }

    public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();

    public virtual Department? Department { get; set; } = null!;

    public virtual ICollection<Examination> Examinations { get; set; } = new List<Examination>();

    public virtual ICollection<Faculty> Faculties { get; set; } = new List<Faculty>();
}
