using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Attendance
{
    [Key]
    public string StudentId { get; set; } = null!;
    [Key]
    public string CourseId { get; set; } = null!;
    [Key]
    [DataType(DataType.Date, ErrorMessage = "This is not a Date Type")]
    public DateTime Doa { get; set; }
    [Required]
    [RegularExpression(@"^(Present|Absent)$", ErrorMessage = "Invalid Status")]
    [StringLength(10)]
    public string? Status { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
