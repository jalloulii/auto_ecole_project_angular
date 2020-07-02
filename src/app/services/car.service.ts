import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, Car, Moniteur } from '../models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private _baseLocalUrl = "http://localhost:3000";
  private _allCarUrl = this._baseLocalUrl + "/car/get-all";
  private _addCar = this._baseLocalUrl + "/car/add";
  private _deleteCar = this._baseLocalUrl + "/car/delete";
  constructor(private http: HttpClient) { }
  addCar(car: Car) {
    return this.http.post<any>(this._addCar, car);
  }
  deletCar(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteCar + "/" + id, { headers: headers_options });
  }

  allCars() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._allCarUrl, { headers: headers_options });
  }
}
