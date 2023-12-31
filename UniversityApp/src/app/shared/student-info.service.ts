import { Injectable } from '@angular/core';
import { StudentInfo } from './student-info.model';
import { StudentAddOn } from './student-add-on.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  StudentData: StudentInfo = new StudentInfo();
  readonly StudentUrl = 'http://localhost:5175/api/Students';
  StudentList: StudentInfo[];
  StudentAddOnList : StudentAddOn[];
  StudentAddOnData: StudentAddOn = new StudentAddOn();
  constructor(private objHttp: HttpClient) { }

  postStudentInfo() {
    return this.objHttp.post(this.StudentUrl, this.StudentData);
  }
  getStudentInfoList() {
    return this.objHttp.get(this.StudentUrl).toPromise().then(res => this.StudentList = res as StudentInfo[]);
  }
  getStudentInfo(id){
    return this.objHttp.get(this.StudentUrl+ "/" + id).toPromise().then(res => this.StudentData = res as StudentInfo);
  }
  getStudentAddOnById(id){
    return this.objHttp.get(this.StudentUrl+ "/StudentAddOnById/" + id);
  }
  delStudentInfo(id) {
    return this.objHttp.delete(this.StudentUrl + "/" + id);
  }
  putStudentInfo() {
    return this.objHttp.put(this.StudentUrl + "/" + this.StudentData.StudentId, this.StudentData);
  }
  countStudent() {
    return this.objHttp.get(this.StudentUrl + "/count");
  }
  getStudentsAddOn(){
    return this.objHttp.get(this.StudentUrl + "/StudentAddOn").toPromise().then(res => this.StudentAddOnList = res as StudentAddOn[]);
  }
  getStudentAddOnByFaculty(id){
    return this.objHttp.get(this.StudentUrl + '/filter/' + id).toPromise().then(res => this.StudentAddOnList = res as StudentAddOn[]);
  }
}
