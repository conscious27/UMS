using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Examination
{
    public string ExamId { get; set; } = null!;

    public string CourseId { get; set; } = null!;

    public DateTime Doe { get; set; }

    public int Duration { get; set; }

    public int? Semester { get; set; }

    public string? Type { get; set; }

    public virtual Course Course { get; set; } = null!;

    public virtual ICollection<Result> Results { get; set; } = new List<Result>();
}
