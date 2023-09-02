import { Injectable } from '@angular/core';
import { CourseInfo } from './course-info.model';
import { CourseAddOn } from './course-add-on.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseInfoService {


  CourseData: CourseInfo = new CourseInfo();
  readonly CourseUrl = 'http://localhost:5175/api/Courses';
  CourseList: CourseInfo[];
  CourseAddOnList : CourseAddOn[];
  constructor(private objHttp: HttpClient) { }

  postCourseInfo() {
    return this.objHttp.post(this.CourseUrl, this.CourseData);
  }
  getCourseInfoList() {
    return this.objHttp.get(this.CourseUrl).toPromise().then(res => this.CourseList = res as CourseInfo[]);
  }
  delCourseInfo(id) {
    return this.objHttp.delete(this.CourseUrl + "/" + id);
  }
  putCourseInfo() {
    return this.objHttp.put(this.CourseUrl + "/" + this.CourseData.CourseId, this.CourseData);
  }
  countCourse() {
    return this.objHttp.get(this.CourseUrl + "/count");
  }

  getCoursesAddOn(){
    return this.objHttp.get(this.CourseUrl + "/CourseAddOn").toPromise().then(res => this.CourseAddOnList = res as CourseAddOn[]);
  }

  getAllCourses(departmentId){
    return this.objHttp.get(this.CourseUrl + "/GetAllCourses/" + departmentId).toPromise().then(res => this.CourseAddOnList = res as CourseAddOn[]);
  }
  
  
}

