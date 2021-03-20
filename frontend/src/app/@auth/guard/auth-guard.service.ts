<<<<<<< HEAD
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AuthGuardService implements CanActivate{
=======
export class AuthGuardService implements CanActivate {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

  constructor(public router: Router, public auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated() || localStorage.getItem('customerId') == null || localStorage.getItem('customerId') == 'null') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
