import { Component, OnInit } from '@angular/core';
import { BranchInfoService } from 'src/app/branch-info.service';
import { BranchWithDep } from 'src/app/shared/branch-with-dep';
import { DepartmentInfo } from 'src/app/shared/department-info.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  constructor(public objs: BranchInfoService, public cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.objs.getBranchesWithDepartment();
    console.log(this.objs.branchWithDepList)
  }
}
