import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@auth/guard/auth.service';
import { ServerService } from '../../services/server.service';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string; settings: boolean = false; profile:  boolean = false
  constructor(private rout: Router, private auth: AuthService, private _snackBar: MatSnackBar, private settingsFunc: SettingsComponent, private server: ServerService, private profileFunc: ProfileComponent) { }

  ngOnInit(): void {
    var profilePic_ = document.getElementById('profilePic_');
    this.username = this.server.userInformations.userName;

    profilePic_.setAttribute('src', this.server.userInformations.customerImageFileLocation==(undefined || '')? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.server.userInformations.customerImageFileLocation}`);
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

  open(x) {
    if(x=='settings') {
      this.settingsFunc.ngOnInit()
      this.settings = true;
      this.profile = false
    }
    if(x=='profile') {
      this.settings = false;
      this.profileFunc.ngOnInit()
      this.profile = true
    }
  }

}
