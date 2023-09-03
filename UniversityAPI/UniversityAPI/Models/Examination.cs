using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Examination
{
    [Key]
    [StringLength(5, ErrorMessage = "DepartmentID Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^E.*", ErrorMessage = "DepartmentID must start with E")]
    public string ExamId { get; set; } = null!;
    [Required(ErrorMessage = "CourseID is Mandatory")]
    public string CourseId { get; set; } = null!;
    [Required(ErrorMessage = "Date of Examination is Required")]
    [DataType(DataType.Date, ErrorMessage = "This is not a Date Type")]
    public DateTime Doe { get; set; }
    [Required(ErrorMessage = "Duration is Required")]
    public int Duration { get; set; }
    [Required(ErrorMessage = "Semester Cannot be Empty")]
    [Range(1, 8, ErrorMessage = "Semester Cannot be Greater than 8 and less than 1")]
    public int? Semester { get; set; }
    [Required(ErrorMessage = "Type of Examination is Required")]
    [RegularExpression(@"^(Final|Midterm|Other)$", ErrorMessage = "Invalid Gender")]
    public string? Type { get; set; }

    public virtual Course? Course { get; set; } = null!;

    public virtual ICollection<Result> Results { get; set; } = new List<Result>();
}
