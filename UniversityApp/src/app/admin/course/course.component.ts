import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CourseInfoService } from 'src/app/shared/course-info.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(public objs:CourseInfoService , public cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.objs.getCoursesAddOn();
  }
}