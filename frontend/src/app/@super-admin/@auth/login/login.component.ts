import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
import { ToastService } from 'src/app/@theme/services/toast.service';
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
  constructor(public jwtHelper: JwtHelperService, private server: SuperServiceService, private toast: ToastService, private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated() && localStorage.getItem('userId') !== null) {
      this.rout.navigate(['super-admin/dashboard'])
    }
  }

  handleSubmit() {
    this.loading = true
    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
      if (data.isSuccess) {
        console.log(data)
        localStorage.setItem('token_', data.token.accessToken);
        const stringified = this.jwtHelper.decodeToken(data.token.accessToken).StaffEntity;
        console.log(JSON.parse(stringified).StaffId)
        localStorage.setItem('userId', JSON.parse(stringified).StaffId);
        this.toast.toast('success', 'Login Successful!');
        this.rout.navigate(['super-admin/dashboard'])

        // this.server.userInformations = data.entity;
      }
      else {
        this.err = 'Please fill in the boxes correctly';
        this.toast.toast('info', this.err)
      }
    }, error => this.handleError(error))
  };

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

  handleError(err) {
    this.toast.toast('error', 'Error Logging In');
    this.err = 'Error Logging In!'
    this.loading = false
    console.log(err)
    // if
  }


}
