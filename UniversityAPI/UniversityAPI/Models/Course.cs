using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Course
{
    public string CourseId { get; set; } = null!;

    public string CourseCode { get; set; } = null!;

    public string CourseName { get; set; } = null!;

    public int Credits { get; set; }

    public string DepartmentId { get; set; } = null!;

    public string? Syllabus { get; set; }

    public string? Description { get; set; }

    public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();

    public virtual Department Department { get; set; } = null!;

    public virtual ICollection<Examination> Examinations { get; set; } = new List<Examination>();

    public virtual ICollection<Faculty> Faculties { get; set; } = new List<Faculty>();
}
