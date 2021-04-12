import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AuthGuardService } from './@auth/guard/auth-guard.service';
import { AuthService } from './@auth/guard/auth.service';
import { ServerService } from './@theme/services/server.service';
import { ToastService } from './@theme/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend'; loading: boolean = true;

  constructor(private auth: AuthService, private toast: ToastService, private server: ServerService, private http: HttpClient) { }

  ngOnInit(): void {
    const x = localStorage.getItem('customerId');
    if (this.auth.isAuthenticated() && x !== 'null' && x !== null) {
      // fetch data and save inside userInformation
      this.loading = true;
      this.server.getUserDeytailsWithCustomerId(x).subscribe(data => {

        this.server.userInformations = data.entity

        // getAllBanks
        this.http.get<any>(`https://api.paystack.co/bank`).subscribe((dat) => { this.server.allBanks = dat; setTimeout(() => {
          // get all international banks
          this.http.get<any>(`https://api.paystack.co/bank`).subscribe((dat) => { 
            this.server.intBanks = dat; 
            this.loading = false 
          });
        }, 500); });
      }, err => this.toast.toast('error', 'Network Error'));
      
    }
    else {
      this.loading = false;
      this.toast.toast('warning', 'Your Session has expired!')
    }
  }

}
