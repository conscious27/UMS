import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
import { CourseInfoService } from 'src/app/shared/course-info.service';
import { DepartmentInfoService } from 'src/app/shared/department-info.service';
import { ExamInfoService } from 'src/app/shared/exam-info.service';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-exam-reg',
  templateUrl: './exam-reg.component.html',
  styleUrls: ['./exam-reg.component.css']
})
export class ExamRegComponent implements OnInit {
  existingCourseId = this.objService.ExamData.ExamId;
  mode:any;
  isEditMode: boolean;
  constructor(public objService: ExamInfoService, public courseService:CourseInfoService,
    public navBarService: NavBarAlterService, public router: Router) { }
  ngOnInit(): void {
    const token = localStorage.getItem("authToken")
    try {
      const tokenPayload: any = jwtDecode(token);

      console.log(tokenPayload)
      if (tokenPayload.Role === "Admin") {
        console.log(this.objService.ExamData)
        this.loadCourses();
        if (this.existingCourseId) {
          this.existingCourseId = this.objService.ExamData.ExamId;
          this.mode = "update";
        }
        else {
          this.resetForm()
        }
        this.isEditMode = true;
      }
      else if (tokenPayload.Role === "Faculty") {

      }
      else if (tokenPayload.Role === "Student") {

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
      this.objService.ExamData = {ExamId:"", CourseId:"", Doe:"", Duration:"", Semester:"", Type:""};
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
    this.objService.postExamInfo().subscribe(res => {
      this.resetForm(form);
      this.objService.getExamInfoList();
      alert('New Exam Added');
    },
      err => { alert('Error!' + err); })
  }

  loadCourses() {
    this.courseService.getCourseInfoList();
  }

  updateRecord(form: NgForm) {
    this.objService.putExamInfo().subscribe(
      res => {
        this.resetForm();
        this.objService.getExamInfoList();
        alert('Exam Record Updated!');
      },
      err => {
        alert('Error!' + err);
      }
    )
  }
    
}
