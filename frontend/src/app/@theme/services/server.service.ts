import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public userDetails;

  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post<any>(`${environment.url}/api/customers/create`, user)
  };

  logIn(user) {
    return this.http.post<any>(`${environment.url}/api/authentication/login`, user)
  }
  
  createOrder(order) {
    return this.http.post<any>(`${environment.url}/api/order/create`, order)
  }
}
