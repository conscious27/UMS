import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchInfoService } from 'src/app/branch-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent {
  existingStudentId = this.objService.StudentData.StudentId;
  mode:any;
  constructor(public objService:StudentInfoService, public depService:DepartmentInfoService, 
    public branchService:BranchInfoService){}
  ngOnInit(){
    this.loadDepartment();
    this.loadBranch();
    if(this.existingStudentId){
      this.existingStudentId = this.objService.StudentData.StudentId;
      this.mode="update";
    }
    else{
      this.resetForm()
    }  }

  resetForm(form?:NgForm){
    if(form!=null)
    {
      form.form.reset();
    }
    else{
      this.objService.StudentData = {StudentId:"", FirstName:"", LastName:"", Gender:"", ContactNumber:"", Email:"", DateOfBirth:"", DepartmentId:"",
    BranchId:"", EnrollmentDate:"", Saddress:"", Semester:""};
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
    this.objService.postStudentInfo().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getStudentInfoList();
        alert('New Faculty Added');
      },
      err=>{alert('Error!' + err);})
  }

  loadDepartment(){
    this.depService.getDepartmentInfoList();
  }
  loadBranch(){
    this.branchService.getBranchInfoList();
  }

  updateRecord(form:NgForm)
  {
    this.objService.putStudentInfo().subscribe(
      res=>{
        this.resetForm();
        this.objService.getStudentInfoList();
        alert('Faculty Record Updated!');
      },
      err=> {
        alert('Error!' + err);
      }
    )
  }
}
