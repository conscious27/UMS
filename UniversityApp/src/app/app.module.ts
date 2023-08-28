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

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    FacultyDashboardComponent,
    AdminDashboardComponent,
    LoginComponent,
    StudentPersonalinfoComponent,
    StudentCourseComponent,
    StudentAttendanceComponent,
    StudentFeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
