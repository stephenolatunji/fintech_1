import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post<any>(`${environment.url}/api/customers/create`, user)
  };

  logIn(user) {
    return this.http.post<any>(`${environment.url}/api/authentication/login`, user)
  }
}
