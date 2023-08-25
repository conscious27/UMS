using System;
using System.Collections.Generic;

namespace UniversityAPI.Models;

public partial class Admin
{
    public string AdminId { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string? LastName { get; set; }

    public string? Gender { get; set; }

    public string? ContactNumber { get; set; }

    public string? Email { get; set; }
}
