import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { CodeMeet } from 'src/app/models/user';
import { ok } from 'assert';

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
  private _getALLCodemeetUSers = this._baseLocalUrl + "/rendezvousCode/allmeetUserCode/";
  constructor(private http: HttpClient) { }

  allCodeM() {
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._allMeetingCodeUrl, { headers: header_options });
  }
  allCodeMeetUSERS() {
    let user_id = new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getALLCodemeetUSers + user_id, { headers: header_options });
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