import { Injectable } from '@angular/core';
import { CourseReg } from './course-reg.model';
import { CourseRegAddOn } from './course-reg-add-on.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseRegService {

  CourseRegData: CourseReg = new CourseReg();
  readonly CourseRegUrl = 'http://localhost:5175/api/CourseRegs';
  CourseRegList: CourseReg[];
  CourseRegAddOnList : CourseRegAddOn[];
  constructor(private objHttp: HttpClient) { }

  postCourseReg() {
    return this.objHttp.post(this.CourseRegUrl, this.CourseRegData);
  }
  getCourseRegList() {
    return this.objHttp.get(this.CourseRegUrl).toPromise().then(res => this.CourseRegList = res as CourseReg[]);
  }
  // getCourseRegListByStudentId(id) {
  //   return this.objHttp.get(this.CourseRegUrl).toPromise().then(res => this.CourseRegList = res as CourseReg[]);
  // }
  delCourseReg(id) {
    return this.objHttp.delete(this.CourseRegUrl + "/" + id);
  }
  putCourseReg() {
    return this.objHttp.put(this.CourseRegUrl + "/" + this.CourseRegData.CourseId, this.CourseRegData);
  }
  countCourseReg() {
    return this.objHttp.get(this.CourseRegUrl + "/count");
  }

  getCoursesRegAddOn(studentId){
    return this.objHttp.get(this.CourseRegUrl + "/GetCourseByStudentId/" + studentId).toPromise().then(res => this.CourseRegAddOnList = res as CourseRegAddOn[]);
  }

  getCoursesRegAddOnCount(studentId){
    return this.objHttp.get(this.CourseRegUrl + "/GetCourseByStudentIdCount/" + studentId);
  }

}
