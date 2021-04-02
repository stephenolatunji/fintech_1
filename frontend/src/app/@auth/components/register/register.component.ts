import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './../../../@theme/services/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable({
  providedIn: "root"
})
export class RegisterComponent implements OnInit {

  public user = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    cpassword: '',
    phoneNumber: '',
    countryCode: '+234',

    address: "string",
    middleName: "string",
    dateOfBirth: "2021-06-23",
    gender: 1,
  };
  type: string = 'password'; docUpload: boolean = false; type2: string = 'password'

  public messages = {
    err: '',
    loading: false,
    pwdErr: false,
    cpwdErr: false
  }

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit(): void {
    if (this.server.userDetails !== undefined) {
      this.user = this.server.userDetails
      console.log(this.user)
    }
  }

  handleNext() {
    if (this.messages.pwdErr || this.user.firstName == '' || this.user.lastName == '' || this.user.userName == '' || this.user.email == '' || this.user.password == '' || this.user.phoneNumber == '') {
      this.messages.err = 'Please fill all fields correctly'
    }

    else {
      this.docUpload = true
      this.messages.err = ''
    }
  }

  togglePasswordType(x) {
    if(x=='pwd') {
      this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
      document.getElementById("password").setAttribute("type", this.type);
    }
    else {
      this.type2 = document.getElementById("cpassword").getAttribute("type") == 'password' ? 'text' : 'password';
      document.getElementById("cpassword").setAttribute("type", this.type2);
    }
  }

  checkPwdValid() {
    const pattern1 = /[a-z]/g;
    const pattern2 = /[A-Z]/g;
    const pattern3 = /[0-9]/g;
    const pattern4 = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    const res1 = this.user.password?.match(pattern1);
    const res2 = this.user.password?.match(pattern2);
    const res3 = this.user.password?.match(pattern3);
    const res4 = this.user.password?.match(pattern4);

    if (this.user.password.length >= 8 && res1?.length > 0 && res2?.length > 0 && res3.length > 0 && res4.length > 0) {
      this.messages.pwdErr = false
    }
    else {
      this.messages.pwdErr = true
    }
  }

  checkCompatibility() {
    if(this.user.password == this.user.cpassword) {
      this.messages.cpwdErr = false
    }
    else {
      this.messages.cpwdErr = true
    }
  }

}
