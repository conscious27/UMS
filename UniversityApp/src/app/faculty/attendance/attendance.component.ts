import { Component } from '@angular/core';

@Component({
  selector: 'Faculty-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {

  //  // Call the updateBranchOptions() function initially to populate branch options
  data:any=[];
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

  searchAttendance() {
    // Simulate fetching attendance data from API/database
    // Replace this with actual API/database call
    // Example data:
    this.onclick=true;
    this.data = [
      { id: 1, name: 'John Doe', attendance: 'present' },
      { id: 2, name: 'Jane Smith', attendance: 'absent' },
      // Add more student data
    ];
  }
}

// export class AttendanceSearchComponent {

//   // ... existing properties ...

//   attendanceData: { id: number; name: string; attendance: string; }[] = [];

//   searchAttendance() {
//     // Simulate fetching attendance data from API/database
//     // Replace this with actual API/database call
//     // Example data:
//     this.attendanceData = [
//       { id: 1, name: 'John Doe', attendance: 'present' },
//       { id: 2, name: 'Jane Smith', attendance: 'absent' },
//       // Add more student data
//     ];
//   }

//   uploadAttendance() {
//     // Simulate uploading attendance data to API/database
//     // Replace this with actual API/database call
//     console.log(this.attendanceData); // Display data before uploading
//     // TODO: Upload data and handle success/error
//   }
// }


