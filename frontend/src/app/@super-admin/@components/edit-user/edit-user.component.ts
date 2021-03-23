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
  }

  goBack() {
    this.userFunc.editUserClicked = false;
  }

  handleSubmit() {
    if (this.newUser.firstName == '' || this.newUser.middleName == '' || this.newUser.lastName == '' ||
      this.newUser.email == '' || this.newUser.phoneNumber == '' || this.newUser.password == '' || this.newUser.address == ''
    ) {
      this.err = 'Please fill all input boxes'
    }
    else {
      // handleNewUser

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

    }

  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
