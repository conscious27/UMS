import { Injectable } from '@angular/core';
import { ExamInfo } from './exam-info.model';
import { HttpClient } from '@angular/common/http';
import { ExamAddOn } from './exam-add-on.model';

@Injectable({
  providedIn: 'root'
})
export class ExamInfoService {

  ExamData: ExamInfo = new ExamInfo();
  readonly ExamUrl = 'http://localhost:5175/api/Examinations';
  ExamList: ExamInfo[];
  ExamAddOnList : ExamAddOn[];
  ExamAddOnData : ExamAddOn = new ExamAddOn();
  constructor(private objHttp: HttpClient) { }

  postExamInfo() {
    return this.objHttp.post(this.ExamUrl, this.ExamData);
  }
  getExamInfoList() {
    return this.objHttp.get(this.ExamUrl).toPromise().then(res => this.ExamList = res as ExamInfo[]);
  }
  getExamInfoListById(id)
  {
    return this.objHttp.get(this.ExamUrl + "/" + id).toPromise().then(res => this.ExamData = res as ExamInfo);
  }
  delExamInfo(id) {
    return this.objHttp.delete(this.ExamUrl + "/" + id);
  }
  putExamInfo() {
    return this.objHttp.put(this.ExamUrl + "/" + this.ExamData.ExamId, this.ExamData);
  }
  getExamInfoByStudent(id, semester) {
    return this.objHttp.get(this.ExamUrl + "/ExamAddOn/i" + id + "/" + semester)
  }
  getExamsAddOn(){
    return this.objHttp.get(this.ExamUrl + "/ExamAddOn").toPromise().then(res => this.ExamAddOnList = res as ExamAddOn[]);
  }
  getExamsAddOnByStudent(id){
    return this.objHttp.get(this.ExamUrl + "/ExamAddOnByStudent/" + id).toPromise().then(res => this.ExamAddOnList = res as ExamAddOn[]);
  }
  getExamsAddOnByStudentCount(id){
    return this.objHttp.get(this.ExamUrl + "/ExamAddOnByStudentCount/" + id);
  }
}
