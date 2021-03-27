import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
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
  constructor(private settings_: SettingsComponent, private server: ServerService, private toast: ToastService, private imageCompress: NgxImageCompressService, private header: HeaderComponent) { }

  ngOnInit(): void {
    // $('#profile').modal('show');
    var profilePic = document.getElementById('profilePic');
    // get data from bE
    this.user = this.server?.userInformations;
    this.user.id = this.server?.userInformations?.customerId;
    profilePic.setAttribute('src', this.user.customerImageFileLocation == (undefined || '' || null) ? 'assets/header/avatar.jpg' : `data:image/jpeg;base64,${this.user.customerImageFileLocation}`);

  }

  back() {
    this.settings_.setDefault()
  }

  handleSubmit() {
    if (this.user.firstName !== '' && this.user.lastName !== '' && this.user.userName !== '' && this.user.phoneNumber !== '' && this.user.email !== '') {
      this.loading = true;
      if (this.newProfilePictureUploaded) {
        this.server.updateProfilePicture(this.user).subscribe(dat => {
          this.newProfilePictureUploaded = false;
          this.uploadUserInfo()
        }, err => this.msg = 'Error updating your profile')
      }

      else {
        this.uploadUserInfo()
      }
    }
    else {
      this.loading = false
      this.err = 'Please fill all boxes'
    }
  }



  uploadUserInfo() {
    this.server.updateUserProfile(this.user).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
        this.server.userInformations = dat.entity;
        this.msg = 'Profile Updated'
        this.toast.toast('success', this.msg)
      }
      else {
        this.msg = 'Error updating your profile'
        this.toast.toast('error', this.msg)
      }
    }, err => this.msg = 'Error updating your profile')
  }

  editProfilePic(ev) {
    const element = ev[0];
    this.user.uploadImage = element.name;
    this.newProfilePictureUploaded = true;
    this.prepareImage(element)
  }

  prepareImage(image) {
    var reader = new FileReader();
    reader.onloadend = () => {
      // compress image
      this.compressFile(reader.result);
      reader.result.toString();
    }
    return reader.readAsDataURL(image);
  }

  compressFile(image) {
    this.imageCompress.compressFile(image, -1, 50, 50).then(result => {
      this.user.uploadImage = result;
      document.getElementById('profilePic').setAttribute('src', result);
      this.header.profilePic_ = result;
    })
  }
}