import { Injectable } from '@angular/core';
import { BranchInfo } from './shared/branch-info.model';
import { HttpClient } from '@angular/common/http';
import { BranchWithDep } from './shared/branch-with-dep';

@Injectable({
  providedIn: 'root'
})
export class BranchInfoService {


  branchData: BranchInfo = new BranchInfo();
  branchWithDepData : BranchWithDep = new BranchWithDep();
  readonly branchUrl = 'http://localhost:5175/api/Branches';
  branchList: BranchInfo[];
  branchWithDepList : BranchWithDep[];
  constructor(private objHttp: HttpClient) { }

  postBranchInfo() {
    return this.objHttp.post(this.branchUrl, this.branchData);
  }
  getBranchInfoList() {
    return this.objHttp.get(this.branchUrl).toPromise().then(res => this.branchList = res as BranchInfo[]);
  }
  delBranchInfo(id) {
    return this.objHttp.delete(this.branchUrl + "/" + id);
  }
  putBranchInfo() {
    return this.objHttp.put(this.branchUrl + "/" + this.branchData.BranchId, this.branchData);
  }
  countBranch() {
    return this.objHttp.get(this.branchUrl + "/count");
  }

  getBranchesWithDepartment(){
    return this.objHttp.get(this.branchUrl + "/BranchWithDep").toPromise().then(res => this.branchWithDepList = res as BranchWithDep[]);
  }
  
  
}

