import { Component } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {

  syllabusData: any[] = [
    { branch: 'Computer Science', department: 'CSE', semester: '1st Semester', link: 'link-to-syllabus-1' },
    { branch: 'Electronics', department: 'ECE', semester: '2nd Semester', link: 'link-to-syllabus-2' },
    // Add more syllabus data
  ];

}
