<<<<<<< HEAD
import { Component, Injectable, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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
    phoneNumber: '',
    countryCode: '+234',

    address: "string",
    middleName: "string",
    dateOfBirth: "2021-06-23",
    gender: 1,
  };
  type: string = 'password'; docUpload: boolean = false;
<<<<<<< HEAD

  public messages = {
    err: '',
    loading: false,
    pwdErr: false
  }

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit(): void {
    if(this.server.userDetails!==undefined) {
=======

  public messages = {
    err: '',
    loading: false,
    pwdErr: false
  }

  constructor(private server: ServerService, private router: Router) { }

  ngOnInit(): void {
    if (this.server.userDetails !== undefined) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.user = this.server.userDetails
      console.log(this.user)
    }
  }

  handleNext() {
<<<<<<< HEAD
    if(this.messages.pwdErr || this.user.firstName =='' || this.user.lastName == '' || this.user.userName == '' || this.user.email == '' || this.user.password == '' || this.user.phoneNumber == '' ) {
=======
    if (this.messages.pwdErr || this.user.firstName == '' || this.user.lastName == '' || this.user.userName == '' || this.user.email == '' || this.user.password == '' || this.user.phoneNumber == '') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.messages.err = 'Please fill all fields correctly'
    }

    else {
      this.docUpload = true
      this.messages.err = ''
    }
  }

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
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

<<<<<<< HEAD
    if( this.user.password.length >= 8 && res1?.length > 0 && res2?.length > 0 && res3.length > 0 && res4.length > 0) {
=======
    if (this.user.password.length >= 8 && res1?.length > 0 && res2?.length > 0 && res3.length > 0 && res4.length > 0) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.messages.pwdErr = false
    }
    else {
      this.messages.pwdErr = true
    }
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
