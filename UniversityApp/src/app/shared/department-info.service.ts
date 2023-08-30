import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentInfo } from './department-info.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentInfoService {
  depData:DepartmentInfo = new DepartmentInfo();
  readonly depUrl = 'http://localhost:5175/api/Departments';
  public depList:DepartmentInfo[];
  constructor(private objHttp: HttpClient) { }

  postDepartmentInfo()
  {
    return this.objHttp.post(this.depUrl, this.depData);
  }
  getDepartmentInfoList(){
    return this.objHttp.get(this.depUrl).toPromise().then(res=>this.depList=res as DepartmentInfo[]);
  }
  delDepartmentInfo(id){
    this.objHttp.delete(this.depUrl+"/"+id);
  }
  putDepartmentInfo(){
    this.objHttp.put(this.depUrl+"/"+this.depData.DepartmentId,this.depData);
  }
  countDepartment(){
    return this.objHttp.get(this.depUrl+"/count");
  }
}
