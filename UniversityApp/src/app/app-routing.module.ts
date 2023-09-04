import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { FacultyDashboardComponent } from './faculty/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { AttendanceComponent } from './faculty/attendance/attendance.component';
import { StudentPersonalinfoComponent } from './student/personalinfo/personalinfo.component';
import { StudentCourseComponent } from './student/course/course.component';
import { StudentAttendanceComponent } from './student/attendance/attendance.component';
import { StudentFeeComponent } from './student/fee/fee.component';
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
import { StudentRegComponent } from './admin/student-reg/student-reg.component';
import { StudentFacultyComponent } from './student/faculty/faculty.component';
import { RegCourseComponent } from './student/reg-course/reg-course.component';
import { FacultyExaminationComponent } from './faculty/examination/examination.component';
import { InteractionpageComponent } from './faculty/interactionpage/interactionpage.component';
import { AssignmentsComponent } from './faculty/assignments/assignments.component';
import { SyllabusComponent } from './faculty/syllabus/syllabus.component';
import { FacultyStudentComponent } from './faculty/student/student.component';
import { FacultyPersonalInfoComponent } from './faculty/personal-info/personal-info.component';
import { ExaminationComponent } from './admin/examination/examination.component';
import { ExamRegComponent } from './admin/exam-reg/exam-reg.component';

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
  {path:'facultyReg', component:FacultyRegComponent},
  {path:'studentReg', component:StudentRegComponent},
  {path:'student_personalInfo', component:StudentPersonalinfoComponent},
  {path:'student_course',component:StudentCourseComponent},
  {path:'student_attendance',component:StudentAttendanceComponent},
  {path:'student_fee',component:StudentFeeComponent},
  {path:'admin_personalInfo', component:AdminPersonalInfoComponent},
  {path:'student_faculty', component:StudentFacultyComponent},
  {path:'student_courseReg', component:RegCourseComponent},
  {path:'faculty_attendance', component:AttendanceComponent},
  {path:'faculty_examination', component:FacultyExaminationComponent},
  {path:'faculty_interaction', component:InteractionpageComponent},
  {path:'faculty_assignments', component:AssignmentsComponent},
  {path:'faculty_syllabus', component:SyllabusComponent},
  {path:'student_personalInfo', component:StudentPersonalinfoComponent},
  {path:'student_course',component:StudentCourseComponent},
  {path:'student_attendance',component:StudentAttendanceComponent},
  {path:'student_fee',component:StudentFeeComponent},
  {path:'faculty_student', component:FacultyStudentComponent},
  {path:'faculty_personalInfo', component:FacultyPersonalInfoComponent},
  {path:'admin_ExamInfo', component:ExaminationComponent},
  {path:'examReg', component:ExamRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
