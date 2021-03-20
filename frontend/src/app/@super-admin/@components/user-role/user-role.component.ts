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
<<<<<<< HEAD
=======
  editUserRoleClicked: boolean = false;
  roleToEdit;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allUserRoles = this.server.allRoles;
<<<<<<< HEAD
    if(this.allUserRoles == undefined) {
      this.server.getAllUserRole().subscribe(dat=>{
        this.allUserRoles = dat.roleLists;
      })
    }
  }

=======
    if (this.allUserRoles == undefined) {
      this.getData()
    }
  }

  getData() {
    this.server.getAllUserRole().subscribe(dat => {
      this.allUserRoles = dat.roleLists;
    })
  }

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  toggleAddUser() {
    this.addUserRoleClicked = true;
  }

  action(index) {
    this.allUserRoles[this.lastIndex].more = false;
<<<<<<< HEAD
    this.allUserRoles[index].more = (index == this.lastIndex)? !this.allUserRoles[index].more : true;
=======
    this.allUserRoles[index].more = (index == this.lastIndex) ? !this.allUserRoles[index].more : true;
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    this.lastIndex = index;
  }

  handleEdit(data) {
<<<<<<< HEAD

  }

}
=======
    this.editUserRoleClicked = true;
    this.addUserRoleClicked = false;
    this.roleToEdit = data;
    console.log(data);

  }

}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
