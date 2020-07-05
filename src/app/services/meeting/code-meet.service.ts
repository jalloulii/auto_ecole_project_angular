import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { CodeMeet } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CodeMeetService {
  private _baseLocalUrl = "http://localhost:3000";
  private _allMeetingCodeUrl = this._baseLocalUrl + "/rendezvousCode/all";
  private _addMeetingCode = this._baseLocalUrl + "/rendezvousCode/add";
  private _deleteMeetingCode = this._baseLocalUrl + "/rendezvousCode/delete/";
  private _updateForm = this._baseLocalUrl + "/rendezvousCode/update-form/";
  private _getOneMeetingCode = this._baseLocalUrl + "/rendezvousCode/one/";
  constructor(private http: HttpClient) { }

  allCodeM() {
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._allMeetingCodeUrl, { headers: header_options });
  }
  addCodeMeet(meet: CodeMeet) {

    return this.http.post<any>(this._addMeetingCode, meet);

  }
  deleteCodeMeet(id) {
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteMeetingCode + id, { headers: header_options })
  }
  updateForm(id, codeMeet) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + id, codeMeet, { headers: headers_options });
  }
  getOneCodeMeet(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneMeetingCode + id, { headers: headers_options });
  }
}