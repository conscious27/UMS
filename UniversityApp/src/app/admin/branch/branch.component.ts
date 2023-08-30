import { Component, OnInit } from '@angular/core';
import { BranchInfoService } from 'src/app/branch-info.service';
import { DepartmentInfo } from 'src/app/shared/department-info.model';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  departmentMode : DepartmentInfo;
  constructor(public objs: BranchInfoService){}
  ngOnInit(): void {
    this.objs.getBranchInfoList();
  }
}
