import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { FacultyDashboardComponent } from './faculty/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentPersonalinfoComponent } from './student/personalinfo/personalinfo.component';
import { StudentCourseComponent } from './student/course/course.component';
import { StudentAttendanceComponent } from './student/attendance/attendance.component';
import { StudentFeeComponent } from './student/fee/fee.component';
import { AdminPersonalInfoComponent } from './admin/personal-info/personal-info.component';
import { BranchComponent } from './admin/branch/branch.component';
import { AdminDepartmentComponent } from './admin/department/department.component';
import { CourseComponent } from './admin/course/course.component';
import { FacultyComponent } from './admin/faculty/faculty.component';
import { StudentComponent } from './admin/student/student.component';
import { DepartmentRegComponent } from './admin/department-reg/department-reg.component';
import { BranchRegComponent } from './admin/branch-reg/branch-reg.component';
import { CourseRegComponent } from './admin/course-reg/course-reg.component';
import { FacultyRegComponent } from './admin/faculty-reg/faculty-reg.component';
import { StudentRegComponent } from './admin/student-reg/student-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    FacultyDashboardComponent,
    AdminDashboardComponent,
    LoginComponent,
<<<<<<< HEAD
    AdminPersonalInfoComponent,
    BranchComponent,
    AdminDepartmentComponent,
    CourseComponent,
    FacultyComponent,
    StudentComponent,
    DepartmentRegComponent,
    BranchRegComponent,
    CourseRegComponent,
    FacultyRegComponent,
    StudentRegComponent
=======
    StudentPersonalinfoComponent,
    StudentCourseComponent,
    StudentAttendanceComponent,
    StudentFeeComponent,
    AdminPersonalInfoComponent
>>>>>>> origin/basu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
