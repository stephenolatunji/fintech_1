import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServerService } from '../../services/server.service';
import { SettingsComponent } from '../settings/settings.component';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

@Injectable({
  providedIn: "root"
})

export class ProfileComponent implements OnInit {
  user = { firstName: '', lastName: null, userName: '', email: '', countryCode: '+234', phoneNumber: '', customerId: '', id: '', customerImageFileLocation: '' }
  err; loading: boolean = false; msg = ''; profilePic;
  constructor(private settings_: SettingsComponent, private server: ServerService, private _snackBar: MatSnackBar) { }

  async ngOnInit() {
    $('#profile').modal('show');
    // var profilePic = document.getElementById('profilePic');
    // get data from bE
    this.user = this.server.userInformations;
    this.user.id = this.server.userInformations.customerId;
<<<<<<< HEAD
  
    this.profilePic = this.user.customerImageFileLocation==(undefined || '' || null)? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.user.customerImageFileLocation}`;
   
=======

    this.profilePic = this.user.customerImageFileLocation == (undefined || '' || null) ? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.user.customerImageFileLocation}`;

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  back() {
    $('#profile').modal('hide');
  }

  // handleSubmit() {
  //   if(this.user.firstName!=='' && this.user.lastName!=='' && this.user.userName!=='' && this.user.phoneNumber!== '' && this.user.email!=='') {
  //     this.loading = true;
  //     this.server.updateUserProfile(this.user).subscribe(dat=>{
  //       this.loading = false;
  //       if(dat.succeeded) {
  //         this.server.userInformations = dat.entity;
  //         this.msg = 'Profile Updated'
  //         this.openSnackBar(this.msg)
  //       }
  //       else {
  //         this.msg = 'Error updating your profile'
  //         this.openSnackBar(this.msg)
  //       }
  //     }, err => this.openSnackBar('Network Error'))
  //   }
  //   else {
  //     this.loading = false
  //     this.err = 'Please fill all boxes'
  //   }
  // }

  // openSnackBar(msg) {
  //   this._snackBar.open(msg, '', {
  //     duration: 2500,
  //   });
  // }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
