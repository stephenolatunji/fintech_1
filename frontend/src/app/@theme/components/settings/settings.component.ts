import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
declare var $: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SettingsComponent implements OnInit {

  stuffs = { one: false, two: false, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false }
  password = ''; err; loading; msg;
  set = {
    sound: false, notification: false
  }


  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.setDefault();
    $('#settings').modal('show');
  }

  setDefault() {
    this.stuffs = { one: false, two: false, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false }
  }

  back() {
    $('#settings').modal('hide');
  }

  open(x) {
    if (x == 1) {
      this.stuffs = {
        one: !this.stuffs.one, two: false, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
    if (x == 2) {
      this.stuffs = {
        one: false, two: !this.stuffs.two, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
    if (x == 3) {
      this.stuffs = {
        one: false, two: false, three: !this.stuffs.three, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
    if (x == 'sub3') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: !this.stuffs.sub_three, profile: false, changePassword: false, changeDocument: false
      }
    }
    if (x == 'sub1') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, profile: !this.stuffs.profile, changePassword: false, changeDocument: false
      }
    }
    if (x == 'sub2') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, changePassword: !this.stuffs.changePassword, profile: false, changeDocument: false
      }
    }
    if (x == 'subsub3') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, changePassword: false, profile: false, changeDocument: !this.stuffs.changeDocument
      }
    }
  }

  confirmPassword() {
    if (this.password !== '') {
      // confirm
      this.loading = true;
      this.server.confirmPassword(this.password).subscribe(dat => {
        if (dat.succeeded) {
          this.loading = false;
          this.open('subsub3');
        }
        else {
          this.loading = false;
          this.msg = dat.messages[0]
        }
      }, err => this.msg = 'Network Error')

    }
    else {
      this.err = 'Please input a correct password'
    }
  }

}
