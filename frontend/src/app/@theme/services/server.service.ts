import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public userDetails; matchFound; pendingOrders;
 
  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post<any>(`${environment.url}/api/customers/create`, user)
  };

  logIn(user) {
    return this.http.post<any>(`${environment.url}/api/authentication/login`, user)
  }
  
  createOrder(order) {
    return this.http.post<any>(`${environment.url}/api/orders/create`, order)
  }

  getPendingOrders() {
    return this.http.get<any>(`${environment.url}/api/orders/getcustomerpendingorders/${localStorage.getItem('customerId')}`)
  }

  getTop10Listing() {
    return this.http.get<any>(`${environment.url}/api/orders/gettop10orderlistings`)
  }
}
