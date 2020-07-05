import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, Car, Moniteur } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private _baseLocalUrl = "http://localhost:3000";
  private _allMoniteur = this._baseLocalUrl + "/moniteur/all";
  private _addMoniteur = this._baseLocalUrl + "/moniteur/register/";
  private _deleteMoniteur = this._baseLocalUrl + "/moniteur/delete";
  private _updateMoniteur = this._baseLocalUrl + "/moniteur/update-state";
  private _updateForm = this._baseLocalUrl + "/moniteur/update-form";
  private _getOneMonitor = this._baseLocalUrl + "/moniteur/one";
  private _loginMonitor = this._baseLocalUrl + "/moniteur/login";
  constructor(private http: HttpClient) { }
  addMoniteurr(moniteur) {
    return this.http.post<any>(this._addMoniteur, moniteur);


  }
  updateForm(id, monitor) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + "/" + id, monitor, { headers: headers_options });
  }
  getOneMonitor(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneMonitor + "/" + id, { headers: headers_options });
  }
  allMoniteurs() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

    return this.http.get<any>(this._allMoniteur, { headers: headers_options });
  }

  updateMoniteur(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateMoniteur + "/" + id, null, { headers: headers_options });
  }
  deletMoniteur(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteMoniteur + "/" + id, { headers: headers_options });
  }
  loginMonitor(monitor: Moniteur) {
    return this.http.post<any>(this._loginMonitor, monitor);
  }
}
