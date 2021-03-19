import { UserRoleComponent } from './../user-role/user-role.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrls: ['./edit-user-role.component.css']
})
export class EditUserRoleComponent implements OnInit {
  newRole = {
    roleId: null, accessLevel: null, name: null
  }
  @Input() data;
  constructor(private roleFunc: UserRoleComponent, private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newRole = this.data
  }

  handleEdit() {
    this.server.editUserRole(this.newRole).subscribe(dat => {
      console.log(dat)
      this.openSnackBar("User Role Edited Successfully!")
    }, err => this.openSnackBar("Failed to edit user role."))
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

  goBack() {
    this.roleFunc.editUserRoleClicked = false;
  }

}
