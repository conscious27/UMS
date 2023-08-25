using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Attendance
{
    public string StudentId { get; set; } = null!;

    public string CourseId { get; set; } = null!;

    public DateTime Doa { get; set; }

    public string? Status { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
