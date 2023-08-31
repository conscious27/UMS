import { ChangeDetectorRef, Component } from '@angular/core';
import { FacultyInfoService } from 'src/app/shared/faculty-info.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  constructor(public objs:FacultyInfoService , public cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.objs.getFacultysAddOn();
  }
}
