import { Injectable } from '@angular/core';
import { AdminInfo } from './admin-info.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoService {

  AdminData: AdminInfo = new AdminInfo();
  readonly AdminUrl = 'http://localhost:5175/api/Admins';
  AdminList: AdminInfo[];
  constructor(private objHttp: HttpClient) { }

  postAdminInfo() {
    return this.objHttp.post(this.AdminUrl, this.AdminData);
  }
  getAdminInfoList() {
    return this.objHttp.get(this.AdminUrl).toPromise().then(res => this.AdminList = res as AdminInfo[]);
  }
  getAdminInfoById(id) {
    return this.objHttp.get(this.AdminUrl + "/" + id);
  }
  delAdminInfo(id) {
    this.objHttp.delete(this.AdminUrl + "/" + id);
  }
  putAdminInfo() {
    this.objHttp.put(this.AdminUrl + "/" + this.AdminData.AdminId, this.AdminData);
  }
}
