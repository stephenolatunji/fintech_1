import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ServerService } from '../../services/server.service';
import { HeaderComponent } from '../header/header.component';
import { SettingsComponent } from '../settings/settings.component';
declare var $: any;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user = { firstName: '', lastName: null, userName: '', email: '', countryCode: '+234', phoneNumber: '', customerId: '', id: '', uploadImage: '', customerImageFileLocation: 'assets/header/avatar.jpg' }
  err; loading: boolean = false; msg = ''; newProfilePictureUploaded: boolean = false; profilePic;
  constructor(private settings_: SettingsComponent, private server: ServerService, private _snackBar: MatSnackBar, private imageCompress: NgxImageCompressService, private header: HeaderComponent) { }

  ngOnInit(): void {
    // $('#profile').modal('show');
    var profilePic = document.getElementById('profilePic');
    // get data from bE
    this.user = this.server.userInformations;
    this.user.id = this.server.userInformations.customerId;
<<<<<<< HEAD
    profilePic.setAttribute('src', this.user.customerImageFileLocation==(undefined || '' || null)? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.user.customerImageFileLocation}`);
=======
    profilePic.setAttribute('src', this.user.customerImageFileLocation == (undefined || '' || null) ? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.user.customerImageFileLocation}`);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

  }

  back() {
    this.settings_.setDefault()
  }

  handleSubmit() {
<<<<<<< HEAD
    if(this.user.firstName!=='' && this.user.lastName!=='' && this.user.userName!=='' && this.user.phoneNumber!== '' && this.user.email!=='') {
      this.loading = true;
      if(this.newProfilePictureUploaded) {
        this.server.updateProfilePicture(this.user).subscribe(dat=>{
          this.newProfilePictureUploaded = false;
          this.uploadUserInfo()
        }, err=>this.msg = 'Error updating your profile')
=======
    if (this.user.firstName !== '' && this.user.lastName !== '' && this.user.userName !== '' && this.user.phoneNumber !== '' && this.user.email !== '') {
      this.loading = true;
      if (this.newProfilePictureUploaded) {
        this.server.updateProfilePicture(this.user).subscribe(dat => {
          this.newProfilePictureUploaded = false;
          this.uploadUserInfo()
        }, err => this.msg = 'Error updating your profile')
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      }

      else {
        this.uploadUserInfo()
      }
<<<<<<< HEAD
      
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    }
    else {
      this.loading = false
      this.err = 'Please fill all boxes'
    }
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

  uploadUserInfo() {
<<<<<<< HEAD
    this.server.updateUserProfile(this.user).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
=======
    this.server.updateUserProfile(this.user).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
        this.server.userInformations = dat.entity;
        this.msg = 'Profile Updated'
        this.openSnackBar(this.msg)
      }
      else {
        this.msg = 'Error updating your profile'
        this.openSnackBar(this.msg)
      }
    }, err => this.msg = 'Error updating your profile')
  }

  editProfilePic(ev) {
    const element = ev[0];
    this.user.uploadImage = element.name;
    this.newProfilePictureUploaded = true;
<<<<<<< HEAD
    this.prepareImage(element)     
  }
  
=======
    this.prepareImage(element)
  }

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  prepareImage(image) {
    var reader = new FileReader();
    reader.onloadend = () => {
      // compress image
      this.compressFile(reader.result);
      reader.result.toString();
    }
    return reader.readAsDataURL(image);
  }
<<<<<<< HEAD
  
  compressFile(image) {
    this.imageCompress.compressFile(image, -1, 50, 50).then(result=> {     
      this.user.uploadImage = result; 
=======

  compressFile(image) {
    this.imageCompress.compressFile(image, -1, 50, 50).then(result => {
      this.user.uploadImage = result;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      document.getElementById('profilePic').setAttribute('src', result);
      this.header.profilePic_ = result;
    })
  }
}