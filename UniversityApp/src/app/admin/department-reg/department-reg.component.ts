import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';

@Component({
  selector: 'app-department-reg',
  templateUrl: './department-reg.component.html',
  styleUrls: ['./department-reg.component.css']
})
export class DepartmentRegComponent implements OnInit {
  existingDepartmentId = this.objService.depData.DepartmentId;
  mode:any;
  constructor(public objService:DepartmentInfoService){}
  ngOnInit(){
    if(this.existingDepartmentId){
      this.existingDepartmentId = this.objService.depData.DepartmentId;
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
      this.objService.depData = {DepartmentId:"", DepartmentName:"", ContactNumber:""}
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
    this.objService.postDepartmentInfo().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getDepartmentInfoList();
        alert('New Department Added');
      },
      err=>{alert('Error!' + err);})
  }

  updateRecord(form:NgForm)
  {
    this.objService.putDepartmentInfo().subscribe(
      res=>{
        this.resetForm();
        this.objService.getDepartmentInfoList();
        alert('Department Record Updated!');
      },
      err=> {
        alert('Error!' + err);
      }
    )
  }

}
