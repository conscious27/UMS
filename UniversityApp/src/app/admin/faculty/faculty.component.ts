import { Component } from '@angular/core';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  constructor(public objs:FacultyInfoService ) {}

  ngOnInit(): void {
    this.objs.getFacultysAddOn();
    this.objs.getFacultyInfoList();
  }

  fillForm(selectedFaculty)
  {
    this.objs.FacultyData = Object.assign({}, selectedFaculty)
  }

  createNew()
  {
    this.objs.FacultyData = {FacultyId:"", FirstName:"", LastName:"", Gender:"", ContactNumber:"", Email:"", DepartmentId:"", CourseId:""};
  }

  onDelete(Id)
  {
    if(confirm('Are you sure you want to delete this Department ?'))
    {
      this.objs.delFacultyInfo(Id).subscribe(
        res=>{
          alert('Department Deleted');
          this.objs.getFacultyInfoList();
          
        },
        err=>{alert("ERROR OCUURED " + err);
      }
      )
    }
}
}
