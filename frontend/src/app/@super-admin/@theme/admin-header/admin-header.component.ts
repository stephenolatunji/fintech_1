import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../@auth/guard/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth: AuthService, private rout: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logout() {
    this.openSnackBar('Logging out');
    this.auth.logout().subscribe(()=>{
      localStorage.setItem('userId', null)
      localStorage.setItem('token_', null)
      this.openSnackBar('Logout Successful');
      this.rout.navigate(['super-admin']);
    });
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
