using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Result
{
    [Key]
    public string StudentId { get; set; } = null!;
    [Key]
    public string ExamId { get; set; } = null!;
    [Required(ErrorMessage = "MarskObtained is Required")]
    [Range(0, 100, ErrorMessage = "MarksObtained should be between 0 and 100")]
    public int MarksObtained { get; set; }
    [Required(ErrorMessage = "Grade is Required")]
    [RegularExpression(@"^(A|B|C|F)$", ErrorMessage = "Invalid Grade")]
    public string? Grade { get; set; }

    public virtual Examination? Exam { get; set; } = null!;

    public virtual Student? Student { get; set; } = null!;
}
