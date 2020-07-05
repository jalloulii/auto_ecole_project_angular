import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, Car, Moniteur } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class UeserService {
  //https://jsonplaceholder.typicode.com/users

  //base url
  private _baseUrl = "https://jsonplaceholder.typicode.com"

  private _baseLocalUrl = "http://localhost:3000";

  private _registerUser = this._baseLocalUrl + "/user/register";
  private _loginUser = this._baseLocalUrl + "/user/login";
  private _allUserUrl = this._baseLocalUrl + "/user/all";
  private _updateUser = this._baseLocalUrl + "/user/update-state";
  private _deleteUser = this._baseLocalUrl + "/user/delete";
  private _updateForm = this._baseLocalUrl + "/user/update-form";
  private _getOneUser = this._baseLocalUrl + "/user/one";




  //API Routes
  private _registerUrl = this._baseUrl + "/users"


  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  registerUser(user: User) {
    return this.http.post<any>(this._registerUser, user);
  }


  //5arajna el donne mel token stana blh 5let ba7theya hhhhhhhhhhhhhhhhhh behy kamle rigel ok




  loginUser(user: User) {
    return this.http.post<any>(this._loginUser, user);
  }

  isLoggedAdmin() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "admin") {
        console.log(decodedToken);
        return true;
      } else {
        return false;
      }
    } else { return false; }

  }

  isLoggedUser() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      
      if (decodedToken.role == "user") {
        console.log(decodedToken.etat);
        return true;
      } else {
        return false;
      }
    } else { return false; }
  }

  isLoggedMonitor() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "monitor") {
        return true;
      } else {
        return false;
      }
    } else { return false; }
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");

    if (token) {

      return true;

    } else { return false; }
  }






  allUsers() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

    return this.http.get<any>(this._allUserUrl, { headers: headers_options });
  }

  updateUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateUser + "/" + id, null, { headers: headers_options });
  }

  updateForm(id, user) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + "/" + id, user, { headers: headers_options });
  }
  getOneUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneUser + "/" + id, { headers: headers_options });
  }

  deletUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteUser + "/" + id, { headers: headers_options });
  }




  /*
    registermonitor(user:User){
    return this.http.post<any>(this._monitorRegisterUrl,user);
  }

  */


}
