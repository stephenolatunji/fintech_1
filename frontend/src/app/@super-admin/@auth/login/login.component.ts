import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
<<<<<<< HEAD
import {MatSnackBar} from '@angular/material/snack-bar';
=======
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
import { AuthService } from '../../@auth/guard/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-super-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null }; loading: boolean = false; type: string = 'password'; err;
  constructor(public jwtHelper: JwtHelperService, private server: SuperServiceService, private _snackBar: MatSnackBar, private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
    if(this.auth.isAuthenticated() && localStorage.getItem('userId')!==null) {
=======
    if (this.auth.isAuthenticated() && localStorage.getItem('userId') !== null) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.rout.navigate(['super-admin/dashboard'])
    }
  }

  handleSubmit() {
    this.loading = true
    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
<<<<<<< HEAD
      if(data.isSuccess) {console.log(data)
        localStorage.setItem('token_', data.token.accessToken);
        const decoded = JSON.parse(this.jwtHelper.decodeToken(data.token.accessToken).staffEntity);
        localStorage.setItem('userId', decoded.staffId);
=======
      if (data.isSuccess) {
        console.log(data)
        localStorage.setItem('token_', data.token.accessToken);
        const stringified = this.jwtHelper.decodeToken(data.token.accessToken).StaffEntity;
        console.log(JSON.parse(stringified).StaffId)
        localStorage.setItem('userId', JSON.parse(stringified).StaffId);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
        this.openSnackBar('Login Successful!');
        this.rout.navigate(['super-admin/dashboard'])

        // this.server.userInformations = data.entity;
      }
      else {
        this.err = 'Please fill in the boxes correctly';
        this.openSnackBar(this.err)
      }
    }, error => this.handleError(error))
  };

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

  handleError(err) {
    this.openSnackBar('Error Logging In');
    this.err = 'Error Logging In!'
<<<<<<< HEAD
    this.loading= false
=======
    this.loading = false
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    console.log(err)
    // if
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
