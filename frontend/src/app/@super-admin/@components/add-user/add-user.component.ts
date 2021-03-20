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
<<<<<<< HEAD
    userId: localStorage.getItem('userId'), staffId: '',
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', supervisor: '', staffCode: '', role: '', department: ''
  }; err; loading:boolean = false;
=======
    userId: localStorage.getItem('userId'),
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', staffCode: '', role: '', department: '', createdBy: ""
  }; err; loading: boolean = false;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  goBack() {
    this.userFunc.addUserClicked = false;
  }

  handleSubmit() {
<<<<<<< HEAD
    if(this.newUser.firstName=='' || this.newUser.middleName=='' || this.newUser.lastName=='' ||
      this.newUser.email=='' || this.newUser.phoneNumber== '' ||  this.newUser.password=='' || this.newUser.address==''
=======
    if (this.newUser.firstName == '' || this.newUser.middleName == '' || this.newUser.lastName == '' ||
      this.newUser.email == '' || this.newUser.phoneNumber == '' || this.newUser.password == '' || this.newUser.address == ''
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      // handleNewUser

<<<<<<< HEAD
        this.server.addNewUser(this.newUser).subscribe(dat=>{
          if(dat.succeeded) {
            this.loading = false;
            this.openSnackBar("New User Added Successfully!")
          }
          else {
            this.openSnackBar("Error adding new user!")
          }
        }, err => this.openSnackBar("Error adding new user!"))
      
=======
      this.server.addNewUser(this.newUser).subscribe(dat => {
        if (dat.succeeded) {
          this.loading = false;
          this.openSnackBar("New User Added Successfully!");
          this.userFunc.getData();
          this.goBack();
        }
        else {
          this.openSnackBar("Error adding new user!")
        }
      }, err => this.openSnackBar("Error adding new user!"))

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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
<<<<<<< HEAD
    this.prepareImage(element)     
=======
    this.prepareImage(element)
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
