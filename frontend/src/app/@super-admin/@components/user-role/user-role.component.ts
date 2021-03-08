import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  allUserRoles;
  addUserRoleClicked: boolean = false;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allUserRoles = this.server.allCustomers;
    if(this.allUserRoles == undefined) {
      this.server.getAllUserRole().subscribe(dat=>{
        this.allUserRoles = dat.roleLists;
      })
    }
  }

  toggleAddUser() {
    this.addUserRoleClicked = true;
  }

  action() {
    
  }

}
