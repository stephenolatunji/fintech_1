import { Component, Injectable, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
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
@Injectable({providedIn: "root"})

export class HeaderComponent implements OnInit {
  username: string; settings: boolean = false; profile:  boolean = false; profilePic_
  constructor(private rout: Router, private auth: AuthService, private toast: ToastService, private settingsFunc: SettingsComponent, private server: ServerService, private profileFunc: ProfileComponent) { }

  ngOnInit(): void {
    this.username = this.server?.userInformations?.userName;
    const avatar = this.server?.userInformations?.customerImageFileLocation;
    this.profilePic_ = (avatar == undefined || avatar == '' || avatar == null) ? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.server.userInformations.customerImageFileLocation}`;
  }

  goTo(route) {
    this.rout.navigate([route])
  }

  logout() {
    this.toast.toast('info', 'Logging out');
    this.auth.logout().subscribe(()=>{
      this.server.pendingOrders = undefined;
      this.server.getPendingOrders_ = undefined;
      this.server.userInformations = undefined;
      this.server.unfullfilledOrder = undefined;
      localStorage.setItem('user', null)
      localStorage.setItem('customerId', null)
      localStorage.setItem('token', null)
      this.toast.toast('success', 'Logout Successful');
      this.rout.navigate(['login']);
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