import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentInfoService } from 'src/app/shared/student-info.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(public objs:StudentInfoService , public cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.objs.getStudentsAddOn();
  }
}
