import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuardService } from './@auth/guard/auth-guard.service';
import { AuthService } from './@auth/guard/auth.service';
import { ServerService } from './@theme/services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'frontend'; loading:boolean=true;

  constructor(private auth: AuthService, private _snackBar: MatSnackBar, private server: ServerService, private http: HttpClient) {}

  ngOnInit(): void {
    const x =  localStorage.getItem('customerId');
    if(this.auth.isAuthenticated() &&  x!=='null' && x!==null) {
      // fetch data and save inside userInformation
      this.loading = true;
      this.server.getUserDeytailsWithCustomerId(x).subscribe(data=> {
        
        this.server.userInformations = data.entity
        
        // getAllBanks
        this.http.get<any>(`https://api.paystack.co/bank`).subscribe((dat)=>{this.server.allBanks = dat; this.loading = false});
      }, err=>this.snackBar('Network Error'));
=======
  title = 'frontend'; loading: boolean = true;

  constructor(private auth: AuthService, private _snackBar: MatSnackBar, private server: ServerService, private http: HttpClient) { }

  ngOnInit(): void {
    const x = localStorage.getItem('customerId');
    if (this.auth.isAuthenticated() && x !== 'null' && x !== null) {
      // fetch data and save inside userInformation
      this.loading = true;
      this.server.getUserDeytailsWithCustomerId(x).subscribe(data => {

        this.server.userInformations = data.entity

        // getAllBanks
        this.http.get<any>(`https://api.paystack.co/bank`).subscribe((dat) => { this.server.allBanks = dat; this.loading = false });
      }, err => this.snackBar('Network Error'));
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    }
    else {
      this.loading = false;
      this.snackBar('Your Session has expired!')
    }
  }
<<<<<<< HEAD
  
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  snackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
