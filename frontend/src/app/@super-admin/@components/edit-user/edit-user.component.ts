import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from '../../@theme/service/super-service.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
  @Input() data;

  newUser = {
<<<<<<< HEAD
    userId: localStorage.getItem('userId'), staffId: '',
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', supervisor: '', staffCode: '', role: '', department: ''
  };
  err; loading:boolean = false;
  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data!==undefined?
    this.newUser = this.data : null
=======
    userId: localStorage.getItem('userId'), staffId: '', employmentDate: '', dateOfBirth: '',
    firstName: '', middleName: '', lastName: '', gender: 0, email: '', phoneNumber: '', supervisorId: 0,
    roleId: 0, password: '', address: '', accessLevel: '', supervisor: '', staffCode: '', role: '', department: ''
  };
  err; loading: boolean = false;
  constructor(private userFunc: UsersComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.data !== undefined ?
      this.newUser = this.data : null;
    console.log(this.newUser);
    console.log(this.data);
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  goBack() {
    this.userFunc.editUserClicked = false;
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
        this.server.editUser(this.newUser).subscribe(dat=>{
          if(dat.succeeded) {
            this.loading = false;
            this.openSnackBar("User Updated Successfully!")
          }
          else {
            this.openSnackBar("Error updating user!")
          }
        }, err => this.openSnackBar("Error updating user!"))
      
=======
      this.server.editUser(this.newUser).subscribe(dat => {
        if (dat.succeeded) {
          this.loading = false;
          this.userFunc.editUserClicked = false;
          this.openSnackBar("User Updated Successfully!")
        }
        else {
          this.openSnackBar("Error updating user!")
        }
      }, err => this.openSnackBar("Error updating user!"))

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    }

  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
