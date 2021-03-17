import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from '../../@theme/service/super-service.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() data;

  newUser = {
    userId: localStorage.getItem('userId'), staffId: '',
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: 'string'
  }; err; loading:boolean = false;

  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.data!==undefined) {
      this.newUser = this.data
    }
  }

  goBack() {
    this.data = undefined;
    this.userFunc.addUserClicked = false;
  }

  handleSubmitAndUpdate() {
    if(this.newUser.firstName=='' || this.newUser.middleName=='' || this.newUser.lastName=='' ||
      this.newUser.email=='' || this.newUser.phoneNumber== '' ||  this.newUser.password==''
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      // handleNewUser
      if(this.data==undefined) {

        this.server.addNewUser(this.newUser).subscribe(dat=>{
          if(dat.succeeded) {
            this.loading = false;
            this.openSnackBar("New User Added Successfully!")
          }
          else {
            this.openSnackBar("Error adding new user!")
          }
        }, err => this.openSnackBar("Error adding new user!"))
      
      }
      // handleUpdateUser
      else {
        this.server.editUser(this.data).subscribe(dat=>{
          if(dat.succeeded) {
            this.loading = false;
            this.openSnackBar("User Updated Successfully!")
          }
          else {
            this.openSnackBar("Error updating user!")
          }
        }, err => this.openSnackBar("Error updating user!"))
      }
    }

  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
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
