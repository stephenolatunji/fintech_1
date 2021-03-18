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

  newUser = {
    userId: localStorage.getItem('userId'), staffId: '',
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', supervisor: '', staffCode: '', role: '', department: ''
  }; err; loading:boolean = false;

  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  goBack() {
    this.userFunc.addUserClicked = false;
  }

  handleSubmit() {
    if(this.newUser.firstName=='' || this.newUser.middleName=='' || this.newUser.lastName=='' ||
      this.newUser.email=='' || this.newUser.phoneNumber== '' ||  this.newUser.password=='' || this.newUser.address==''
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      // handleNewUser

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
