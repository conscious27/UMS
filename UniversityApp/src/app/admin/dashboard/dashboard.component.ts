import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { BranchComponent } from '../branch/branch.component';
import { BranchInfoService } from 'src/app/branch-info.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NavBarAlterService]
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private navServices: NavBarAlterService, public departmentService: DepartmentInfoService,
    public cdRef:ChangeDetectorRef, public branchService: BranchInfoService) { }

  public departmentCount: any;
  public branchCount: any;
  ngOnInit(): void {
    // this.navServices.navBarMode = "Admin"
    this.getDepartmentCount()
    this.getBranchCount()
  }

  getDepartmentCount() {
    this.departmentService.countDepartment().subscribe(
      (count) => {
        this.departmentCount = count;
        // console.log(this.departmentCount); // Log the value after it's updated
        // // Additional code that depends on this.departmentCount should go here
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

  getBranchCount() {
    this.branchService.countBranch().subscribe(
      (count) => {
        this.branchCount = count;
        // console.log(this.departmentCount); // Log the value after it's updated
        // // Additional code that depends on this.departmentCount should go here
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

}
