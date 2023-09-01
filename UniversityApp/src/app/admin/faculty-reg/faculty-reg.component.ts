import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-faculty-reg',
  templateUrl: './faculty-reg.component.html',
  styleUrls: ['./faculty-reg.component.css']
})
export class FacultyRegComponent {
  existingFacultyId = this.objService.FacultyData.FacultyId;
  mode:any;
  constructor(public objService:FacultyInfoService, public depService:DepartmentInfoService, 
    public courseService:CourseInfoService){}
  ngOnInit(){
    console.log(this.objService.FacultyData)
    this.loadDepartment();
    this.loadCourses();
    if(this.existingFacultyId){
      this.existingFacultyId = this.objService.FacultyData.CourseId;
      this.mode="update";
    }
    else{
      this.resetForm()
    }

    console.log(this.objService.FacultyData)
  }

  resetForm(form?:NgForm){
    if(form!=null)
    {
      form.form.reset();
    }
    else{
      this.objService.FacultyData = {FacultyId:"", FirstName:"", LastName:"", Gender:"", ContactNumber:"", Email:"", DepartmentId:"", CourseId:""};
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
    this.objService.postFacultyInfo().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getFacultyInfoList();
        alert('New Faculty Added');
      },
      err=>{alert('Error!' + err);})
  }

  loadDepartment(){
    this.depService.getDepartmentInfoList();
  }
  loadCourses(){
    this.courseService.getCourseInfoList();
  }

  updateRecord(form:NgForm)
  {
    this.objService.putFacultyInfo().subscribe(
      res=>{
        this.resetForm();
        this.objService.getFacultyInfoList();
        alert('Faculty Record Updated!');
      },
      err=> {
        alert('Error!' + err);
      }
    )
  }
}
