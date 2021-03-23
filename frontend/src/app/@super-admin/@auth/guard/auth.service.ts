import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token_');
    // Check whether the token is expired and return
    // true or false
    if (token !== ('null' || undefined)) {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  public logout() {
    return this.http.post<any>(`${environment.url2}/api/authentication/logout`, { email: localStorage.getItem('userId') })
  }
}
