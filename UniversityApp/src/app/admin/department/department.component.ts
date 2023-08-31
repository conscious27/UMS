import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';


@Component({
  selector: 'app-admin-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class AdminDepartmentComponent implements OnInit {
  constructor(public objs: DepartmentInfoService, public cdRef : ChangeDetectorRef){}
  ngOnInit(): void {
    this.objs.getDepartmentInfoList();
  }

  fillForm(selectedDep)
  {
    this.objs.depData = Object.assign({}, selectedDep)
  }

  onDelete(depId)
  {
    if(confirm('Are you sure you want to delete this Department ?'))
    {
      this.objs.delDepartmentInfo(depId).subscribe(
        res=>{this.objs.getDepartmentInfoList()
        },
        err=>{alert("ERROR OCUURED " + err);
      }
      )
    }
  }

}
