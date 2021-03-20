import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
<<<<<<< HEAD
import {MatSnackBar} from '@angular/material/snack-bar';
=======
import { MatSnackBar } from '@angular/material/snack-bar';
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
import { AuthService } from '../../guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null }; loading: boolean = false; type: string = 'password'; err;
  constructor(private server: ServerService, private _snackBar: MatSnackBar, private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
    if(this.auth.isAuthenticated() && localStorage.getItem('customerId')!==null) {
=======
    if (this.auth.isAuthenticated() && localStorage.getItem('customerId') !== null) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.rout.navigate(['dashboard'])
    }
  }

  handleSubmit() {
    this.loading = true
    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
<<<<<<< HEAD
      if(data.isSuccess) {console.log(data)
=======
      if (data.isSuccess) {
        console.log(data)
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
        localStorage.setItem('token', data.token.accessToken);
        localStorage.setItem('customerId', data.entity.customerId);
        localStorage.setItem('user', data.entity.userName);
        this.openSnackBar('Login Successful!');
        this.rout.navigate(['dashboard']);

        this.server.userInformations = data.entity;
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
