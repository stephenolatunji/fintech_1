import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../@theme/services/server.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = { email: null, password: null }; loading: boolean = false; type: string = 'password'; err;
  constructor(private server: ServerService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true
    this.server.logIn(this.user).subscribe(data => {
      this.loading = false;
      if(data.isSuccess) {
        this.openSnackBar('Login Successful!');
        console.log(data.token.accessToken)
        console.log(data.entity)
      }
      else {
        this.err = data.message;
        this.openSnackBar(`Sorry, ${data.message}`)
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
