import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NavBarAlterService } from 'src/app/nav-bar-alter.service';
import { ExamInfoService } from 'src/app/shared/exam-info.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {
  constructor(public objs: ExamInfoService, public nvs: NavBarAlterService,
    public router:Router) { }
  ngOnInit(): void {
    this.objs.getExamInfoList();
    this.objs.getExamsAddOn();


    const token = localStorage.getItem("authToken")
    try {
      const tokenPayload: any = jwtDecode(token);

      console.log(tokenPayload)
      if (tokenPayload.Role === "Admin") {
        this.objs.getExamInfoList();
        this.objs.getExamsAddOn();
      }
      else if (tokenPayload.Role === "Faculty") {

      }
      else if (tokenPayload.Role === "Student") {
        this.objs.getExamInfoList();
        this.objs.getExamsAddOnByStudent(tokenPayload.AdminId);
      }
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  fillForm(selectedExam) {
    this.objs.ExamData = Object.assign({}, selectedExam)
  }

  createNew() {
    this.objs.ExamData = { ExamId: "", CourseId: "", Doe: "", Duration: "", Semester: "", Type: "" };
  }

  onDelete(examId) {
    if (confirm('Are you sure you want to delete this Department ?')) {
      this.objs.delExamInfo(examId).subscribe(
        res => {
          alert('Department Deleted');
          this.objs.getExamInfoList();

        },
        err => {
          alert("ERROR OCUURED " + err);
        }
      )
    }
  }
}

