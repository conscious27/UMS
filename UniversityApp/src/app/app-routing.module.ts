import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { FacultyDashboardComponent } from './faculty/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminPersonalInfoComponent } from './admin/personal-info/personal-info.component';
import { AdminDepartmentComponent } from './admin/department/department.component';
import { BranchComponent } from './admin/branch/branch.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  // {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'student_dashboard', component:StudentDashboardComponent},
  {path:'admin_dashboard', component:AdminDashboardComponent},
  {path:'faculty_dashboard', component:FacultyDashboardComponent},
  {path:'admin_personalInfo', component:AdminPersonalInfoComponent},
  {path:'admin_DepartmentInfo', component:AdminDepartmentComponent},
  {path:'admin_BranchInfo', component:BranchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
