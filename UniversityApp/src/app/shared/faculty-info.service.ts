import { Injectable } from '@angular/core';
import { FacultyInfo } from './faculty-info.model';
import { FacultyAddOn } from './faculty-add-on';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyInfoService {

  FacultyData: FacultyInfo = new FacultyInfo();
  readonly FacultyUrl = 'http://localhost:5175/api/Faculties';
  FacultyList: FacultyInfo[];
  FacultyAddOnList : FacultyAddOn[];
  constructor(private objHttp: HttpClient) { }

  postFacultyInfo() {
    return this.objHttp.post(this.FacultyUrl, this.FacultyData);
  }
  getFacultyInfoList() {
    return this.objHttp.get(this.FacultyUrl).toPromise().then(res => this.FacultyList = res as FacultyInfo[]);
  }
  delFacultyInfo(id) {
    this.objHttp.delete(this.FacultyUrl + "/" + id);
  }
  putFacultyInfo() {
    this.objHttp.put(this.FacultyUrl + "/" + this.FacultyData.FacultyId, this.FacultyData);
  }
  countFaculty() {
    return this.objHttp.get(this.FacultyUrl + "/count");
  }

  getFacultysAddOn(){
    return this.objHttp.get(this.FacultyUrl + "/FacultyAddOn").toPromise().then(res => this.FacultyAddOnList = res as FacultyAddOn[]);
  }
}
