import {Component, OnInit } from '@angular/core';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(public objs:StudentInfoService ) {}

  ngOnInit(): void {
    this.objs.getStudentsAddOn();
    this.objs.getStudentInfoList();
  }

  fillForm(selectedStudent)
  {
    this.objs.StudentData = Object.assign({}, selectedStudent)
  }

  createNew()
  {
    this.objs.StudentData = {StudentId:"", FirstName:"", LastName:"", Gender:"", ContactNumber:"", Email:"", DateOfBirth:"", DepartmentId:"",
    BranchId:"", EnrollmentDate:"", Saddress:"", Semester:""
  }
}

  onDelete(sId)
  {
    if(confirm('Are you sure you want to delete this Department ?'))
    {
      this.objs.delStudentInfo(sId).subscribe(
        res=>{
          alert('Department Deleted');
          this.objs.getStudentInfoList();
          
        },
        err=>{alert("ERROR OCUURED " + err);
      }
      )
    }
}
}
