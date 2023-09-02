using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Contracts;

namespace UniversityAPI.Models
{
    public partial class CourseReg
    {
        [Key]
        public string StudentId { get; set; }
        [Key]
        public string CourseId { get; set; }
        [DataType(DataType.Date)]
        [Required]
        public DateTime DateOfReg { get; set; }

        public virtual Course? Course { get; set; } = null!;

        public virtual Student? Student { get; set; } = null!;
    }
}
