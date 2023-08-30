import { Injectable } from '@angular/core';
import { BranchInfo } from './shared/branch-info.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchInfoService {


  branchData: BranchInfo = new BranchInfo();
  readonly branchUrl = 'http://localhost:5175/api/Branches';
  branchList: BranchInfo[];
  constructor(private objHttp: HttpClient) { }

  postBranchInfo() {
    return this.objHttp.post(this.branchUrl, this.branchData);
  }
  getBranchInfoList() {
    this.objHttp.get(this.branchUrl).toPromise().then(res => this.branchList = res as BranchInfo[]);
  }
  delBranchInfo(id) {
    this.objHttp.delete(this.branchUrl + "/" + id);
  }
  putBranchInfo() {
    this.objHttp.put(this.branchUrl + "/" + this.branchData.BranchId, this.branchData);
  }
  countBranch() {
    return this.objHttp.get(this.branchUrl + "/count");
  }
  getDepartmentsWithMatchingBranch(branchId): Observable<string[]> {
    return this.objHttp.get<string[]>(`${this.branchUrl}/get-department-name/{branchId}`);
  }
  
}

