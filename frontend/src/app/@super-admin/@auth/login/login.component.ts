import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../../@auth/guard/auth.service';
import { Router } from '@angular/router';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-super-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null }; loading: boolean = false; type: string = 'password'; err;
  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar, private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated() && localStorage.getItem('userId')!==null) {
      this.rout.navigate(['super-admin/dashboard'])
    }
  }

  handleSubmit() {
    this.loading = true
    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
      if(data.isSuccess) {console.log(data)
        localStorage.setItem('token_', data.token.accessToken);
        localStorage.setItem('userId',this.user.email);
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
    this.loading= false
    console.log(err)
    // if
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
}
