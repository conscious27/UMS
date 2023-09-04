import { Component, OnInit } from '@angular/core';
import { BranchInfoService } from 'src/app/branch-info.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  constructor(public objs: BranchInfoService) {}

  ngOnInit(): void {
    this.objs.getBranchesWithDepartment();
    this.objs.getBranchInfoList();
  }

  fillForm(selectedBranch)
  {
    this.objs.branchData = Object.assign({}, selectedBranch)
  }

  createNew() {
    this.objs.branchData = { BranchId: "", BranchName: "", DepartmentId: "" };
  }


  onDelete(depId)
  {
    if(confirm('Are you sure you want to delete this Department ?'))
    {
      this.objs.delBranchInfo(depId).subscribe(
        res=>{
          alert('Department Deleted');
          this.objs.getBranchInfoList();
          
        },
        err=>{alert("ERROR OCUURED " + err);
      }
      )
    }
  }
}
