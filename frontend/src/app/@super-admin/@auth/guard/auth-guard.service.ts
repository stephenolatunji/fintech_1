import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../@auth/guard/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router, public auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated() || localStorage.getItem('userId') == null || localStorage.getItem('userId') == 'null') {
      this.router.navigate(['super-admin']);
      return false;
    }
    return true;
  }
}
