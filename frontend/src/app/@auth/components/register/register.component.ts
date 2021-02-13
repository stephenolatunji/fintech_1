import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
    phoneNumber: null,
    countryCode: null
  };
  type: string = 'password';

  constructor(private server: ServerService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.server.newUser(this.user).subscribe(data => {
      console.log(data)
    })
  }

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }
}
