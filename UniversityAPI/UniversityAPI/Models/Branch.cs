using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models;

public partial class Branch
{
    [Key]
    [StringLength(5, ErrorMessage = "Branch Length Cannot Exceeds 5 Character")]
    [RegularExpression(@"^B.*", ErrorMessage = "BranchID must start with B")]
    public string BranchId { get; set; } = null!;
    [Required(ErrorMessage = "Branch Name is Required")]
    [StringLength(50, ErrorMessage = "BranchName must not Exceed 50 Characters")]
    public string BranchName { get; set; } = null!;
    [Required(ErrorMessage = "Department Must be Chosen")]
    public string DepartmentId { get; set; } = null!;

    public virtual Department Department { get; set; }

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
