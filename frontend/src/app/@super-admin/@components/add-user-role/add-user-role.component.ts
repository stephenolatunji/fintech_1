import { Component, OnInit } from '@angular/core';
import { UserRoleComponent } from '../user-role/user-role.component';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {
  newRole = {
    role: null, accessLevel: null
  }
  constructor(private userRoleFunc: UserRoleComponent) { }
  
  ngOnInit(): void {
  }

  goBack() {
    this.userRoleFunc.addUserRoleClicked = false;
  }

}
