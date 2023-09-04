import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { StudentAddOn } from 'src/app/shared/student-add-on.model';
import { StudentInfo } from 'src/app/shared/student-info.model';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-student-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class StudentPersonalinfoComponent {
  studentId: any;

  constructor(public studentService: StudentInfoService, private router: Router,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    const token: any = localStorage.getItem('authToken');

    try {
      const tokenPayload: any = jwtDecode(token);
      console.log(tokenPayload.AdminId)
      this.studentId = tokenPayload.AdminId;
      // Call the method to fetch admin data
      this.fetchStudentData(this.studentId);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  // personal-info.component.ts
  fetchStudentData(id) {
    try {
      this.studentService.getStudentAddOnById(id).subscribe(
        (data) => {
          this.studentService.StudentAddOnData = data as StudentAddOn; // Assuming AdminInfo is the type
          console.log(this.studentService.StudentData.StudentId);
          this.cdRef.detectChanges();
        },
        (error) => {
          console.error('Error fetching student data:', error);
        }
      );
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }
}
