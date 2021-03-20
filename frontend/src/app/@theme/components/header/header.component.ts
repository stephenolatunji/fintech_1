import { Component, Injectable, OnInit } from '@angular/core';
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
<<<<<<< HEAD
@Injectable({providedIn: "root"})

export class HeaderComponent implements OnInit {
  username: string; settings: boolean = false; profile:  boolean = false; profilePic_
=======
@Injectable({ providedIn: "root" })

export class HeaderComponent implements OnInit {
  username: string; settings: boolean = false; profile: boolean = false; profilePic_
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  constructor(private rout: Router, private auth: AuthService, private _snackBar: MatSnackBar, private settingsFunc: SettingsComponent, private server: ServerService, private profileFunc: ProfileComponent) { }

  ngOnInit(): void {
    this.username = this.server.userInformations.userName;
<<<<<<< HEAD
    this.profilePic_ = this.server.userInformations.customerImageFileLocation==(undefined || '' || null)? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.server.userInformations.customerImageFileLocation}`;
=======
    this.profilePic_ = this.server.userInformations.customerImageFileLocation == (undefined || '' || null) ? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.server.userInformations.customerImageFileLocation}`;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  goTo(route) {
    this.rout.navigate([route])
  }

  logout() {
    this.openSnackBar('Logging out');
<<<<<<< HEAD
    this.auth.logout().subscribe(()=>{
=======
    this.auth.logout().subscribe(() => {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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
<<<<<<< HEAD
    if(x=='settings') {
=======
    if (x == 'settings') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.settingsFunc.ngOnInit()
      this.settings = true;
      this.profile = false
    }
<<<<<<< HEAD
    if(x=='profile') {
=======
    if (x == 'profile') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.settings = false;
      this.profileFunc.ngOnInit()
      this.profile = true
    }
  }

}