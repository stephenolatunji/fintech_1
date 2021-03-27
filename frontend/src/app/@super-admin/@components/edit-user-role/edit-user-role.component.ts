import { UserRoleComponent } from './../user-role/user-role.component';
import { ToastService } from 'src/app/@theme/services/toast.service';
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
  constructor(private roleFunc: UserRoleComponent, private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
    this.newRole = this.data
  }

  handleEdit() {
    this.server.editUserRole(this.newRole).subscribe(dat => {
      console.log(dat)
      this.toast.toast('success', "User Role Edited Successfully!")
    }, err => this.toast.toast('error', "Failed to edit user role."))
  }



  goBack() {
    this.roleFunc.editUserRoleClicked = false;
  }

}
