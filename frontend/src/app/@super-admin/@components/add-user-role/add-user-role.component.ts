import { ToastService } from 'src/app/@theme/services/toast.service';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';
import { Component, OnInit } from '@angular/core';
import { UserRoleComponent } from '../user-role/user-role.component';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {
  newRole = {
    name: null, accessLevel: null, userId: localStorage.getItem('userId')
  }
  constructor(private userRoleFunc: UserRoleComponent, private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.server.newUserRole(this.newRole).subscribe(dat => {
      if (dat.succeeded) {
        this.userRoleFunc.getData()
        this.userRoleFunc.addUserRoleClicked = false;
        this.toast.toast('success', "User Role Added Successfully!")
      }
      else {
        this.toast.toast('error', "Failed to add user role.")
      }
    })
  }



  goBack() {
    this.userRoleFunc.addUserRoleClicked = false;
  }

}
