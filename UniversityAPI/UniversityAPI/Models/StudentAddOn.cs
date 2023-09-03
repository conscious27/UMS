using System.ComponentModel.DataAnnotations;

namespace UniversityAPI.Models
{
    public class StudentAddOn
    {
        public string StudentId { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Gender { get; set; }
        public string? ContactNumber { get; set; }
        public string? Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string DepartmentName { get; set; }
        public string BranchName { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public string Saddress { get; set; }
        public int Semester { get; set; }
    }
}
