import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { BranchComponent } from '../branch/branch.component';
import { BranchInfoService } from 'src/app/branch-info.service';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';
import { StudentInfoService } from 'src/app/shared/student-info.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NavBarAlterService]
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private navServices: NavBarAlterService, public departmentService: DepartmentInfoService,
    public cdRef:ChangeDetectorRef, public branchService: BranchInfoService,
    public courseService:CourseInfoService, public facultyService:FacultyInfoService,
    public studentService:StudentInfoService) { }

  public departmentCount: any;
  public branchCount: any;
  public courseCount: any;
  public facultyCount : any;
  public studentCount : any;
  ngOnInit(): void {
    // this.navServices.navBarMode = "Admin"
    this.getDepartmentCount()
    this.getBranchCount()
    this.getCourseCount()
    this.getFacultyCount()
    this.getStudentCount()
  }

  getDepartmentCount() {
    this.departmentService.countDepartment().subscribe(
      (count) => {
        this.departmentCount = count;
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

  getBranchCount() {
    this.branchService.countBranch().subscribe(
      (count) => {
        this.branchCount = count;
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

  getCourseCount() {
    this.courseService.countCourse().subscribe(
      (count) => {
        this.courseCount = count;
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

  getFacultyCount() {
    this.facultyService.countFaculty().subscribe(
      (count) => {
        this.facultyCount = count;
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

  getStudentCount() {
    this.studentService.countStudent().subscribe(
      (count) => {
        this.studentCount = count;
        this.cdRef.detectChanges();
      },
      error => console.error(error)
    );
  }

}
