import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-course-reg',
  templateUrl: './course-reg.component.html',
  styleUrls: ['./course-reg.component.css']
})
export class CourseRegComponent {
  existingCourseId = this.objService.CourseData.CourseId;
  mode: any;
  isEditMode: boolean;
  constructor(public objService: CourseInfoService, public depService: DepartmentInfoService,
    public navBarService: NavBarAlterService, public router: Router, public fService: FacultyInfoService) { }
  ngOnInit() {
    const token = localStorage.getItem("authToken")
    try {
      const tokenPayload: any = jwtDecode(token);

      console.log(tokenPayload)
      if (tokenPayload.Role === "Admin") {
        console.log(this.objService.CourseData)
        this.loadDepartment();
        if (this.existingCourseId) {
          this.existingCourseId = this.objService.CourseData.CourseId;
          this.mode = "update";
        }
        else {
          this.resetForm()
        }
        this.isEditMode = true;
      }
      else if (tokenPayload.Role === "Faculty") {
        this.fService.getFacultyInfoListById(tokenPayload.AdminId)
          .then(() => {
            this.objService.getCourseInfoListById(this.fService.FacultyData.CourseId);
            this.isEditMode = false;
            this.mode = "update";
          });
      }
      else if (tokenPayload.Role === "Student") {
        this.isEditMode = true;
      }
      console.log(this.navBarService.navBarMode)
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }
    else {
      this.objService.CourseData = { CourseId: "", CourseCode: "", CourseName: "", Credits: "", DepartmentId: "", Syllabus: "", Description: "" };
    }
  }

  onSubmit(form: NgForm) {
    if (this.mode == "update") {
      this.updateRecord(form);
    } else {
      this.insertRecord(form);
    }

  }

  insertRecord(form: NgForm) {
    this.objService.postCourseInfo().subscribe(res => {
      this.resetForm(form);
      this.objService.getCourseInfoList();
      alert('New Course Added');
    },
      err => { alert('Error!' + err); })
  }

  loadDepartment() {
    this.depService.getDepartmentInfoList();
  }

  updateRecord(form: NgForm) {
    this.objService.putCourseInfo().subscribe(
      res => {
        this.resetForm();
        this.objService.getCourseInfoList();
        alert('Course Record Updated!');
      },
      err => {
        alert('Error!' + err);
      }
    )
  }
}
