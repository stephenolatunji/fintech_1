import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { SuperServiceService } from '../../@theme/service/super-service.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newUser = {
    userId: localStorage.getItem('userId'),
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', staffCode: '', role: '', department: '', createdBy: ""
  }; err; loading: boolean = false;

  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.userFunc.addUserClicked = false;
  }

  handleSubmit() {
    if (this.newUser.firstName == '' || this.newUser.middleName == '' || this.newUser.lastName == '' ||
      this.newUser.email == '' || this.newUser.phoneNumber == '' || this.newUser.password == '' || this.newUser.address == ''
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      // handleNewUser

      this.server.addNewUser(this.newUser).subscribe(dat => {
        if (dat.succeeded) {
          this.loading = false;
          this.toast.toast('success', "New User Added Successfully!");
          this.userFunc.getData();
          this.goBack();
        }
        else {
          this.toast.toast('error', "Error adding new user!")
        }
      }, err => this.toast.toast('error', "Error adding new user!"))

    }

  }




  editProfilePic(ev) {
    const element = ev[0];
    // this.user.uploadImage = element.name;
    // this.newProfilePictureUploaded = true;
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
    // this.imageCompress.compressFile(image, -1, 50, 50).then(result=> {     
    //   this.user.uploadImage = result; 
    // })
  }
}
