import { Component, OnInit } from '@angular/core';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';
import jwtDecode from 'jwt-decode';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-faculty-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class FacultyStudentComponent implements OnInit {
  constructor(public stdService: StudentInfoService) { }
  ngOnInit() {
    const token = localStorage.getItem('authToken');

    const tokenPayload: any = jwtDecode(token);

    this.stdService.getStudentAddOnByFaculty(tokenPayload.AdminId);
    // // getting all studentid and their registered coursesid in courseRegList[]
    // this.crService.getCourseRegList();
    // console.log(tokenPayload.AdminId);

    // // getting courses taught by this Faculty in facultyData, it has a course id
    // this.fservice.getFacultysAddOnById(tokenPayload.AdminId)

    // // Assuming courseRegList is an array of objects with a 'courseId' property
    // const filteredCourseRegList = this.crService.CourseRegList.filter(course => course.CourseId === this.fservice.FacultyData.CourseId);

    // //contains studentId
    // console.log(filteredCourseRegList);

  }

}
