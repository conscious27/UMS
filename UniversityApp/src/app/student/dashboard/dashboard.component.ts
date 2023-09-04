import { Component, OnInit } from '@angular/core';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { StudentInfoService } from 'src/app/shared/student-info.service';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { ExamInfoService } from 'src/app/shared/exam-info.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit{

  CourseAvailable:any;
  ExamCount : any;
  RegCourses : any;
  constructor(public courseRegService:CourseRegService, public router:Router, 
    public studentService:StudentInfoService, public courseService:CourseInfoService,
    public examService:ExamInfoService){}
  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    
    try{
      const tokenPayload:any = jwtDecode(token);
      console.log(tokenPayload.AdminId);
      this.courseRegService.getCoursesRegAddOn(tokenPayload.AdminId);
      console.log(this.courseRegService.CourseRegAddOnList)
      //ExamCount
      this.examService.getExamsAddOnByStudentCount(tokenPayload.AdminId).subscribe((count) => {
        this.ExamCount = count;
      });
      
      //CourseRegCount
      this.courseRegService.getCoursesRegAddOnCount(tokenPayload.AdminId).subscribe((count) => {
        this.RegCourses = count;
      });
      
      //CourseCount
      this.studentService.getStudentInfo(tokenPayload.AdminId).then(() => {
        
        this.courseService.getAllCoursesCount(this.studentService.StudentData.DepartmentId).subscribe((count) => {
          this.CourseAvailable = count;
        });
      });
    }catch(error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }
    
  }
