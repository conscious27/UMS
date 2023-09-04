import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  selectedCourseId: string = '';
  selectedBranch: string = 'cs';
  selectedSemester: string = '1';
  showAssignments: boolean = false;
  assignments: any[] = [];

  //adding new row assignment
  isEditing: boolean = false;
  newAssignment: any = {
    courseName: '',
    assignmentName: '',
    semester: '',
    dueDate: '',
    assignDate: '',
    isOpen: true,
  };


  searchAssignments() {
    // Simulate fetching assignment data from API/database
    // Replace this with actual API/database call
    // Example data:
    
    this.showAssignments = true;
    this.assignments = [
      { courseName: 'Mathematics',assignmentName:'tignometry', semester: '1st Semester', dueDate: '2023-09-30', assignDate: '2023-09-10', isOpen: true },
      { courseName: 'Physics', assignmentName:'induction law', semester: '2nd Semester', dueDate: '2023-10-15', assignDate: '2023-09-12', isOpen: true },
      // Add more assignment data
    ];
  }

  closeAssignment(assignment: any) {
    // Simulate closing an assignment (set isOpen to false)
    // Update this logic to communicate with your API/database
    assignment.isOpen = false;
  }

  // Function to add a new assignment row
  addAssignment() {
    const newAssignment = {
      courseName: '',
      assignmentName: '',
      semester: '',
      dueDate: '',
      assignDate: '',
      isOpen: true, // You can set this to true by default for a new assignment
    };
    this.assignments.push(newAssignment);
    this.isEditing = true;
  }

  saveAssignment() {
    // Add validation here if needed
    this.assignments.push(this.newAssignment);

    // Reset the newAssignment object and exit editing mode
    this.newAssignment = {
      courseName: '',
      assignmentName: '',
      semester: '',
      dueDate: '',
      assignDate: '',
      isOpen: true,
    };
    this.isEditing = false;
  }
  // Function to cancel editing and hide the input row

  deleteAssignment(index: number) {
    this.assignments.splice(index, 1); // Remove the assignment at the specified index
  }
  


}
