using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Faculty
{
    public string FacultyId { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string? Gender { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }

    public string DepartmentId { get; set; } = null!;

    public string CourseId { get; set; } = null!;

    public virtual Course Course { get; set; } = null!;

    public virtual Department Department { get; set; } = null!;
}
