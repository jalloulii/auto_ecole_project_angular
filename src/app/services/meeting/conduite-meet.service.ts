import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { CodeMeet, ConduiteMeet } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ConduiteMeetService {
  private _baseLocalUrl = "http://localhost:3000";
  private _allMeetingConduiteUrl = this._baseLocalUrl + "/rendezvousConduite/all";
  private _addMeetingConduite = this._baseLocalUrl + "/rendezvousConduite/add";
  private _deleteMeetingConduite = this._baseLocalUrl + "/rendezvousConduite/delete/";
  private _updateForm = this._baseLocalUrl + "/rendezvousConduite/update-form";
  private _getOneMeetingConduite = this._baseLocalUrl + "/rendezvousConduite/one";
  private _getALLConduitemeetUSers = this._baseLocalUrl + "/rendezvousConduite/allUserConduitebyID/";

  constructor(private http: HttpClient) { }
  allCodeMeetMONITORS() {
    let user_id = new JwtHelperService().decodeToken(localStorage.getItem("token")).id;
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getALLConduitemeetUSers + user_id, { headers: header_options });
  }
  getAllConduite() {
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._allMeetingConduiteUrl, { headers: header_options });
  }

  addConduite(conduite: ConduiteMeet) {
    return this.http.post<any>(this._addMeetingConduite, conduite);
  }

  deleteConduite(id) {
    let header_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteMeetingConduite + id, { headers: header_options });
  }

  updateFormConduite(id, conduitemeet) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + "/" + id, conduitemeet, { headers: headers_options });
  }
  getOneConduiteMeet(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneMeetingConduite + "/" + id, { headers: headers_options });
  }





}
