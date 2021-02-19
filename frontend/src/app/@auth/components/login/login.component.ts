import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null }; loading: boolean = false; type: string = 'password';
  constructor(private server: ServerService, private rout: Router) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.user)
    this.server.logIn(this.user).subscribe(data => {
      this.rout.navigate(['dashboard'])
    })
  };

  togglePasswordType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

}
