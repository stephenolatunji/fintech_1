import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuardService } from './@auth/guard/auth-guard.service';
import { AuthService } from './@auth/guard/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private auth: AuthService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if(!this.auth.isAuthenticated() && localStorage.getItem('customerId')!==null) {
      this._snackBar.open('Your Session has expired!', '', {
        duration: 2500,
      });
    }
  }
  
}
