import { Component, OnInit } from '@angular/core';
import { CourseInfoService } from 'src/app/shared/course-info.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(public objs:CourseInfoService) {}

  ngOnInit(): void {
    this.objs.getCoursesAddOn();
    this.objs.getCourseInfoList();
  }

  fillForm(selectedCourse)
  {
    this.objs.CourseData = Object.assign({}, selectedCourse)
  }

  createNew(){
    this.objs.CourseData = {CourseId:"", CourseCode:"", CourseName:"", Credits:"", DepartmentId:"", Syllabus:"", Description:""};
  }


  onDelete(depId)
  {
    if(confirm('Are you sure you want to delete this Department ?'))
    {
      this.objs.delCourseInfo(depId).subscribe(
        res=>{
          alert('Department Deleted');
          this.objs.getCourseInfoList();
          
        },
        err=>{alert("ERROR OCUURED " + err);
      }
      )
    }
  }
}