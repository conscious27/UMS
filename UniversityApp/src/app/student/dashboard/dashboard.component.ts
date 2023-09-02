import { Component, OnInit } from '@angular/core';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit{

  constructor(public courseRegService:CourseRegService, public router:Router){}
  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    
    try{
      const tokenPayload:any = jwtDecode(token);
      console.log(tokenPayload.AdminId);
      this.courseRegService.getCoursesRegAddOn(tokenPayload.AdminId);
      console.log(this.courseRegService.CourseRegAddOnList)
    }catch(error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

}
