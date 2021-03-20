import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  user = {
    newPassword: '', oldPassword: '', confpassword: '', email: this.server.userInformations.email
  }
  err; msg; loading: boolean = false;
<<<<<<< HEAD
  constructor(private settings_: SettingsComponent, private server: ServerService) { } 
=======
  constructor(private settings_: SettingsComponent, private server: ServerService) { }
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

  ngOnInit(): void {
  }

<<<<<<< HEAD
  
  submit() {
    if(this.user.confpassword !=='' && this.user.newPassword!=='' && this.user.oldPassword !==''){
      if(this.user.confpassword == this.user.newPassword){
        this.loading = true;
        this.server.changePassword(this.user).subscribe(dat=>{
          this.loading = false;
          console.log(dat)
          if(dat.succeeded) {
=======

  submit() {
    if (this.user.confpassword !== '' && this.user.newPassword !== '' && this.user.oldPassword !== '') {
      if (this.user.confpassword == this.user.newPassword) {
        this.loading = true;
        this.server.changePassword(this.user).subscribe(dat => {
          this.loading = false;
          console.log(dat)
          if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
            this.msg = 'Password updated successfully'
          }
          else {
            this.msg = dat.messages[0]
          }
        }, err => this.loading = false)
      }
      else {
        this.msg = 'Your new password is not the same as confirm password'
      }
    }
    else {
      this.err = 'Please fill all boxes'
    }
  }

  backToSettings() {
    this.settings_.setDefault()
  }

}
