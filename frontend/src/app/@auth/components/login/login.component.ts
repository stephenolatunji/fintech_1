import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
import { AuthService } from '../../guard/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/@theme/services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null, applicationType: 2, deviceid: localStorage.getItem('deviceId')  }; loading: boolean = false; type: string = 'password'; err;
  constructor(private server: ServerService, private toast: ToastService, private auth: AuthService, private rout: Router) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated() && localStorage.getItem('customerId') !== null) {
      this.rout.navigate(['dashboard'])
    }
  }

  handleSubmit() {

    this.loading = true

    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
      if (data.isSuccess) {
        console.log(data)
       
        localStorage.setItem('token', data.token.accessToken);
        localStorage.setItem('customerId', data.entity.customerId);
        localStorage.setItem('user', data.entity.userName);
        this.toast.toast('success', 'Login Successful!');
        this.rout.navigate(['dashboard']);

        this.server.userInformations = data.entity;
      }
      else {
        this.err = 'Please fill in the boxes correctly';
        this.toast.toast('error', this.err)
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
