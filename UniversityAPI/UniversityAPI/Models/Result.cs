using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Result
{
    public string StudentId { get; set; } = null!;

    public string ExamId { get; set; } = null!;

    public int MarksObtained { get; set; }

    public string? Grade { get; set; }

    public virtual Examination Exam { get; set; } = null!;

    public virtual Student Student { get; set; } = null!;
}
