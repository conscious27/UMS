import { Component, OnInit } from '@angular/core';
import { BranchInfoService } from 'src/app/branch-info.service';
import { ChangeDetectorRef } from '@angular/core';
import { BranchWithDep } from 'src/app/shared/branch-with-dep';

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
