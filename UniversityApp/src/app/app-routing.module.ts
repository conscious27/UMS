import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { FacultyDashboardComponent } from './faculty/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminPersonalInfoComponent } from './admin/personal-info/personal-info.component';
import { AdminDepartmentComponent } from './admin/department/department.component';
import { BranchComponent } from './admin/branch/branch.component';
import { CourseComponent } from './admin/course/course.component';
import { FacultyComponent } from './admin/faculty/faculty.component';
import { StudentComponent } from './admin/student/student.component';
import { DepartmentRegComponent } from './admin/department-reg/department-reg.component';
import { BranchRegComponent } from './admin/branch-reg/branch-reg.component';
import { CourseRegComponent } from './admin/course-reg/course-reg.component';
import { FacultyRegComponent } from './admin/faculty-reg/faculty-reg.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'student_dashboard', component:StudentDashboardComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'faculty_dashboard', component:FacultyDashboardComponent},
  {path:'admin_personalInfo', component:AdminPersonalInfoComponent},
  {path:'admin_DepartmentInfo', component:AdminDepartmentComponent},
  {path:'admin_BranchInfo', component:BranchComponent},
  {path:'admin_CourseInfo', component:CourseComponent},
  {path:'admin_FacultyInfo', component:FacultyComponent},
  {path:'admin_StudentInfo', component:StudentComponent},
  {path:'departmentReg', component:DepartmentRegComponent},
  {path:'adminInfo', component:AdminPersonalInfoComponent},
  {path:'branchReg', component:BranchRegComponent},
  {path:'courseReg', component:CourseRegComponent},
  {path:'facultyReg', component:FacultyRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
