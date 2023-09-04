import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchInfoService } from 'src/app/branch-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';

@Component({
  selector: 'app-branch-reg',
  templateUrl: './branch-reg.component.html',
  styleUrls: ['./branch-reg.component.css']
})
export class BranchRegComponent {
  existingBranchId = this.objService.branchData.BranchId;
  mode:any;
  constructor(public objService:BranchInfoService, public depService:DepartmentInfoService){}
  ngOnInit(){
    console.log(this.objService.branchData)
    this.loadDepartment();
    if(this.existingBranchId){
      this.existingBranchId = this.objService.branchData.BranchId;
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
      this.objService.branchData = {BranchId:"", BranchName:"", DepartmentId:""}
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
    this.objService.postBranchInfo().subscribe(res=>
      {
        this.resetForm(form);
        this.objService.getBranchInfoList();
        alert('New Branch Added');
      },
      err=>{alert('Error!' + err);})
  }

  loadDepartment(){
    this.depService.getDepartmentInfoList();
  }

  updateRecord(form:NgForm)
  {
    this.objService.putBranchInfo().subscribe(
      res=>{
        this.resetForm();
        this.objService.getBranchInfoList();
        alert('Branch Record Updated!');
      },
      err=> {
        alert('Error!' + err);
      }
    )
  }
}
