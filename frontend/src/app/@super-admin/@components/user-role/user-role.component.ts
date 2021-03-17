import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  allUserRoles; lastIndex = 0;
  addUserRoleClicked: boolean = false;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allUserRoles = this.server.allRoles;
    if(this.allUserRoles == undefined) {
      this.server.getAllUserRole().subscribe(dat=>{
        this.allUserRoles = dat.roleLists;
      })
    }
  }

  toggleAddUser() {
    this.addUserRoleClicked = true;
  }

  action(index) {
    this.allUserRoles[this.lastIndex].more = false;
    this.allUserRoles[index].more = (index == this.lastIndex)? !this.allUserRoles[index].more : true;
    this.lastIndex = index;
  }

  handleEdit(data) {

  }

}
