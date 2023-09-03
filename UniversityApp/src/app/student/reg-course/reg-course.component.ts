import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { CourseReg } from 'src/app/shared/course-reg.model';
import { CourseRegService } from 'src/app/shared/course-reg.service';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-reg-course',
  templateUrl: './reg-course.component.html',
  styleUrls: ['./reg-course.component.css']
})
export class RegCourseComponent implements OnInit {
  tokenPayload:any;
  coursesNotChosen:any[];
  constructor(public objService:CourseRegService, public courseService:CourseInfoService,
    public studentService:StudentInfoService ){}
  ngOnInit(): void {
    const token: any = localStorage.getItem('authToken');
    this.tokenPayload = jwtDecode(token);
    this.resetForm();

    this.studentService.getStudentInfo(this.tokenPayload.AdminId).then(() => {
      // CourseRegAddOnList is populated, now filter FacultyList again
      this.getAvailableCourses(this.studentService.StudentData.DepartmentId)
      console.log(this.courseService.CourseAddOnList)
    });

    
    this.coursesNotChosen = this.courseService.CourseAddOnList.filter(
      course => {
        return !this.objService.CourseRegAddOnList.some(
      chosenCourse => chosenCourse.CourseId ===course.CourseId );
     });
  

  console.log(this.coursesNotChosen)
}


  getAvailableCourses(id){
    this.courseService.getAllCourses(id);
  }

  resetForm(form?:NgForm){
    if(form!=null)
    {
      form.form.reset();
    }
    else{
      const currentDate = new Date();
      const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
      this.objService.CourseRegData = {StudentId:this.tokenPayload.AdminId, CourseId:"", DateOfReg: formattedDate};
    }
  }

  onSubmit(form:NgForm)
  {
    this.objService.postCourseReg().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getCourseRegList();
        alert('Course Registered Successful!');
      },
      err=>{alert('Error!' + err);})
  }


}
