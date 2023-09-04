import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-student-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class StudentCourseComponent implements OnInit {


  constructor(public courseRegService:CourseRegService, public studentService:StudentInfoService,
    public router:Router, public courseService:CourseInfoService) {
  }
  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    
    
    try{
      const tokenPayload:any = jwtDecode(token);
      
      this.studentService.getStudentInfo(tokenPayload.AdminId).then(() => {
        // CourseRegAddOnList is populated, now filter FacultyList again
        this.getAvailableCourses(this.studentService.StudentData.DepartmentId);
      });

      console.log(this.studentService.StudentData.DepartmentId);
      // this.getAvailableCourses(this.studentService.StudentData.DepartmentId);
    }catch(error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
    
  }

  getAvailableCourses(id){
    this.courseService.getAllCourses(id);
  }

}
  