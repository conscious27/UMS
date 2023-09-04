import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class FacultyExaminationComponent {
  //this is for list of students to update marks
  // selectedExam: any = null;
  students: any[] = [];
  onclick1:boolean=false;
  examName: string = '';
  //students: { studentId: number; studentName: string; marksObtained: number; }[] = [];

//this is for the list of exams page
  exams:any=[];
  onclick:boolean=false;
  selectedCourse: string = ''; // Initialize selectedCourse
  selectedBranches: { value: string; label: string; }[] = []; // Initialize selectedBranches array

  // Define branch options based on selected course
  courseBranchesMap: { [course: string]: { value: string; label: string; }[] } = {
    btech: [
      { value: 'cs', label: 'Computer Science' },
      { value: 'ece', label: 'Electronics and Communication' },
      { value: 'me', label: 'Mechanical Engineering' },
      { value: 'ee', label: 'Electrical Engineering' },
      { value: 'ce', label: 'Civil Engineering' },
      { value: 'eee', label: 'Electrical and Electronics engineering' }
      // Add more branches for B-tech
    ],
    bca: [
      { value: 'bca', label: 'BCA' },
      
      // Add more branches for BCA
    ],
    bba: [
      { value: 'hr', label: 'Human Resource' },
      { value: 'finance', label: 'Finance' }
      // Add more branches for B-tech
    ],
    bcom: [
      { value: 'hr', label: 'Human Resource' },
      { value: 'finance', label: 'Finance' }
      // Add more branches for B-tech
    ],
    law: [
      { value: 'ballb', label: 'BA.LLB' },
      { value: 'bballb', label: 'BBA.LLB' }
      // Add more branches for B-tech
    ],
    fashion: [
      { value: 'fashion', label: 'Fashion Technology' },
      
      // Add more branches for B-tech
    ],
    journalism: [
      { value: 'journalism', label: 'Bachelor in Journalism' },
      // Add more branches for B-tech
    ],
    // Add more courses and their respective branches here

  
  };
  updateBranchOptions() {
    this.selectedBranches = this.courseBranchesMap[this.selectedCourse] || [];
  }

  ///this part is for the list of examinatons page

  searchExams() {
    // Simulate fetching exam data from API/database
    // Replace this with actual API/database call
    // Example data:
    this.onclick=true;
    this.exams = [
      { courseName: 'mathematics', examName: 'Midterm', status: 'open' },
      { courseName: 'mathematics', examName: 'Final', status: 'close' },
      // Add more exam data
    ];
  }
  //this part is for list of students to obtain marks
  openExamDetails(exam: any){
    // Simulate fetching student data and exam details from API/database
    // Replace this with actual API/database call
    // Example data:
    this.onclick1=true;
    this.examName = exam.examName;
    this.students = [
      { studentId: 1, studentName: 'John Doe', marksObtained: 0 },
      { studentId: 2, studentName: 'Jane Smith', marksObtained: 0 },
      // Add more student data
    ];
  }

  // uploadMarks() {
  //   // Simulate marks upload to API/database
  //   // Replace this with actual API/database call
  //   console.log(this.students); // Display uploaded marks in the console
  // }
  }
  

  
    
  
    


