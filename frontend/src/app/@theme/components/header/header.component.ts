import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@auth/guard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = localStorage.getItem('user');
  constructor(private rout: Router, private auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  goTo(route) {
    this.rout.navigate([route])
  }

  logout() {
    this.openSnackBar('Logging out');
    this.auth.logout().subscribe(()=>{
      localStorage.setItem('user', null)
      localStorage.setItem('customerId', null)
      localStorage.setItem('token', null)
      this.openSnackBar('Logout Successful');
      this.rout.navigate(['login']);
    });
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
