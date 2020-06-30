import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from '../models/user';
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
  private _allCarUrl = this._baseLocalUrl + "/car/get-all";

  //API Routes
  private _registerUrl = this._baseUrl + "/users"


  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
  registerUser(user: User) {
    return this.http.post<any>(this._registerUser, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUser, user);
  }

  isLoggedAdmin() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "admin") {
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



  allUsers() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

    return this.http.get<any>(this._allUserUrl, { headers: headers_options });
  }

  updateUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateUser + "/" + id, null, { headers: headers_options });
  }

  deletUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteUser + "/" + id, { headers: headers_options });
  }

  allCars() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._allCarUrl, { headers: headers_options });
  }

}
