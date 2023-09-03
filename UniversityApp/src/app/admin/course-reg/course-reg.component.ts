import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';

@Component({
  selector: 'app-course-reg',
  templateUrl: './course-reg.component.html',
  styleUrls: ['./course-reg.component.css']
})
export class CourseRegComponent {
  existingCourseId = this.objService.CourseData.CourseId;
  mode:any;
  constructor(public objService:CourseInfoService, public depService:DepartmentInfoService){}
  ngOnInit(){
    console.log(this.objService.CourseData)
    this.loadDepartment();
    if(this.existingCourseId){
      this.existingCourseId = this.objService.CourseData.CourseId;
      this.mode="update";
    }
    else{
      this.resetForm()
    }
  }

  resetForm(form?:NgForm){
    if(form!=null)
    {
      form.form.reset();
    }
    else{
      this.objService.CourseData = {CourseId:"", CourseCode:"", CourseName:"", Credits:"", DepartmentId:"", Syllabus:"", Description:""};
    }
  }

  onSubmit(form:NgForm)
  {
    if(this.mode=="update"){
      this.updateRecord(form);
    }else{
      this.insertRecord(form);
    }
      
  }

  insertRecord(form:NgForm)
  {
    this.objService.postCourseInfo().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getCourseInfoList();
        alert('New Course Added');
      },
      err=>{alert('Error!' + err);})
  }

  loadDepartment(){
    this.depService.getDepartmentInfoList();
  }

  updateRecord(form:NgForm)
  {
    this.objService.putCourseInfo().subscribe(
      res=>{
        this.resetForm();
        this.objService.getCourseInfoList();
        alert('Course Record Updated!');
      },
      err=> {
        alert('Error!' + err);
      }
    )
  }
}
