using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Student
{
    public string StudentId { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string? Gender { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }

    public DateTime DateOfBirth { get; set; }

    public string DepartmentId { get; set; } = null!;

    public string BranchId { get; set; } = null!;

    public DateTime EnrollmentDate { get; set; }

    public string Saddress { get; set; } = null!;

    public int Semester { get; set; }

    public virtual ICollection<Attendance> Attendances { get; set; } = new List<Attendance>();

    public virtual Branch Branch { get; set; } = null!;

    public virtual Department Department { get; set; } = null!;

    public virtual ICollection<Result> Results { get; set; } = new List<Result>();
}
