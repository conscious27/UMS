namespace UniversityAPI.Models
{
    public class ExaminationAddOn
    {

        public string ExamId { get; set; } = null!;
        public string CourseName { get; set; } = null!;

        public DateTime Doe { get; set; }
        public int Duration { get; set; }
        public int? Semester { get; set; }
        public string Type { get; set; }

}
}
