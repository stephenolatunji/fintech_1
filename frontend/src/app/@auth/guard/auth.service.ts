import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
<<<<<<< HEAD
    if(token!==('null' || undefined) ) {
=======
    if (token !== ('null' || undefined)) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      return !this.jwtHelper.isTokenExpired(token)
    }
  }

  public logout() {
<<<<<<< HEAD
    return this.http.post<any>(`${environment.url}/api/authentication/logout`, {email: localStorage.getItem('customerId')})
  }
}
=======
    return this.http.post<any>(`${environment.url}/api/authentication/logout`, { email: localStorage.getItem('customerId') })
  }
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
