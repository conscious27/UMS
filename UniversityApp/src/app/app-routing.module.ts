import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { FacultyDashboardComponent } from './faculty/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentPersonalinfoComponent } from './student/personalinfo/personalinfo.component';
import { StudentCourseComponent } from './student/course/course.component';
import { StudentAttendanceComponent } from './student/attendance/attendance.component';
import { StudentFeeComponent } from './student/fee/fee.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'student_dashboard', component:StudentDashboardComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'faculty_dashboard', component:FacultyDashboardComponent},
  {path:'student_personalInfo', component:StudentPersonalinfoComponent},
  {path:'student_course',component:StudentCourseComponent},
  {path:'student_attendance',component:StudentAttendanceComponent},
  {path:'student_fee',component:StudentFeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
