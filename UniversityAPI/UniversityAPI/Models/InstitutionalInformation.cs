using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class InstitutionalInformation
{
    [Key]
    [StringLength(5)]
    public string UniversityId { get; set; } = null!;

    [Required(ErrorMessage = "University Name is Required")]
    [StringLength(50, ErrorMessage = "University Name cannot exceed 50 Characters")]
    public string UniversityName { get; set; } = null!;

    [Required(ErrorMessage = "University Address is Required")]
    [StringLength(100, ErrorMessage = "University Address cannot exceed 100 character")]
    public string Uaddress { get; set; } = null!;

    [Required(ErrorMessage = "Contact Number is Required")]
    [RegularExpression(@"[0-9]{10}",ErrorMessage = "Invalid Contact")]
    public string? ContactNumber { get; set; }
    public string? Website { get; set; }
}
