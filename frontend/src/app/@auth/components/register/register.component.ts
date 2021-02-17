import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './../../../@theme/services/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '+234'
  };
  type: string = 'password'; err;

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit(): void {
    if (this.server.userDetails !== undefined) {
      this.user = this.server.userDetails
    }
  }

  handleNext() {

    if (this.user.firstName == '' || this.user.lastName == '' || this.user.userName == '' || this.user.email == '' || this.user.password == '' || this.user.phoneNumber == '') {
      this.err = 'Please fill all fields'
    }

    else {
      this.err = ''
      this.server.userDetails = this.user;
      this.router.navigate(['upload']);
    }
  }

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }
}