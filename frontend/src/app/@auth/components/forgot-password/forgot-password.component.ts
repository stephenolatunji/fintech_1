import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  public recoverUser = {
    email: null,
    password: null,
    cpassword: null
  }

  emailSection: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {

  }

}
