import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';
<<<<<<< HEAD
declare var $: any; 
=======
declare var $: any;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

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
<<<<<<< HEAD
    if(x==1) {
      this.stuffs = {
        one:  !this.stuffs.one, two: false, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
    if(x==2) {
=======
    if (x == 1) {
      this.stuffs = {
        one: !this.stuffs.one, two: false, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
    if (x == 2) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.stuffs = {
        one: false, two: !this.stuffs.two, three: false, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
<<<<<<< HEAD
    if(x==3) {
=======
    if (x == 3) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.stuffs = {
        one: false, two: false, three: !this.stuffs.three, sub_three: false, profile: false, changePassword: false, changeDocument: false
      }
    }
<<<<<<< HEAD
    if(x=='sub3') {
=======
    if (x == 'sub3') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.stuffs = {
        one: false, two: false, three: true, sub_three: !this.stuffs.sub_three, profile: false, changePassword: false, changeDocument: false
      }
    }
<<<<<<< HEAD
    if(x=='sub1') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, profile: !this.stuffs.profile,  changePassword: false, changeDocument: false
      }
    }
    if(x=='sub2') {
=======
    if (x == 'sub1') {
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, profile: !this.stuffs.profile, changePassword: false, changeDocument: false
      }
    }
    if (x == 'sub2') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, changePassword: !this.stuffs.changePassword, profile: false, changeDocument: false
      }
    }
<<<<<<< HEAD
    if(x=='subsub3') {
=======
    if (x == 'subsub3') {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.stuffs = {
        one: false, two: false, three: true, sub_three: false, changePassword: false, profile: false, changeDocument: !this.stuffs.changeDocument
      }
    }
  }

  confirmPassword() {
<<<<<<< HEAD
    if(this.password !== ''){
      // confirm
      this.loading = true;
      this.server.confirmPassword(this.password).subscribe(dat=>{
        if(dat.succeeded) {
=======
    if (this.password !== '') {
      // confirm
      this.loading = true;
      this.server.confirmPassword(this.password).subscribe(dat => {
        if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
          this.loading = false;
          this.open('subsub3');
        }
        else {
          this.loading = false;
          this.msg = dat.messages[0]
        }
<<<<<<< HEAD
      }, err=>this.msg='Network Error')
=======
      }, err => this.msg = 'Network Error')
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

    }
    else {
      this.err = 'Please input a correct password'
    }
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
