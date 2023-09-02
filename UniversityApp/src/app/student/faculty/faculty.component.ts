import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-student-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class StudentFacultyComponent implements OnInit{
  facultyForSelectedCourses:any[];
  constructor(public courseRegServices:CourseRegService, public facultyInfoServices:FacultyInfoService,
    public router:Router){}
  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
      const tokenPayload:any = jwtDecode(token);
      this.courseRegServices.getCoursesRegAddOn(tokenPayload.AdminId).then(() => {
        // FacultyList is populated, now filter it
        this.filterFacultyList();
      });
    
      this.facultyInfoServices.getFacultysAddOn().then(() => {
        // CourseRegAddOnList is populated, now filter FacultyList again
        this.filterFacultyList();
      });
  }

  filterFacultyList(){
    this.facultyForSelectedCourses = this.facultyInfoServices.FacultyAddOnList.filter(faculty => {
      // Check if the faculty's CourseId exists in CourseRegAddOnList
      return this.courseRegServices.CourseRegAddOnList.some(course => course.CourseId === faculty.CourseId);
    });
  }

}
