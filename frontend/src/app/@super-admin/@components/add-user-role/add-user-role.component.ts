<<<<<<< HEAD
=======
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
import { Component, OnInit } from '@angular/core';
import { UserRoleComponent } from '../user-role/user-role.component';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {
  newRole = {
<<<<<<< HEAD
    role: null, accessLevel: null
  }
  constructor(private userRoleFunc: UserRoleComponent) { }
  
  ngOnInit(): void {
  }

=======
    name: null, accessLevel: null, userId: localStorage.getItem('userId')
  }
  constructor(private userRoleFunc: UserRoleComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.server.newUserRole(this.newRole).subscribe(dat => {
      if (dat.succeeded) {
        this.userRoleFunc.getData()
        this.userRoleFunc.addUserRoleClicked = false;
        this.openSnackBar("User Role Added Successfully!")
      }
      else {
        this.openSnackBar("Failed to add user role.")
      }
    })
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  goBack() {
    this.userRoleFunc.addUserRoleClicked = false;
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
