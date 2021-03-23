import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated() || localStorage.getItem('customerId') == null || localStorage.getItem('customerId') == 'null') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}