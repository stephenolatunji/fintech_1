import { Component, Injectable, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable({providedIn: "root"})
export class UsersComponent implements OnInit {
  allStaffs=[{staffId:1, lastName: 'Habeeb', firstName: 'Mustay'}, {staffId:1, lastName: 'Habeeb', firstName: 'Mustay', more: false}];
  addUserClicked: boolean = false; lastIndex = 0; staffToEdit; editUserClicked;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    // this.allStaffs = this.server.allStaffs;
    // if(this.allStaffs == undefined) {
    //   this.server.getAllStaffs().subscribe(dat=>{console.log(dat)
    //     this.allStaffs = dat.staffLists;
    //   })
    // }
  }

  toggleAddUser() {
    this.addUserClicked = true;
    this.editUserClicked = false;
  }

  showMore(index) {
    this.allStaffs[this.lastIndex].more = false;
    this.allStaffs[index].more = (index == this.lastIndex)? !this.allStaffs[index].more : true;
    this.lastIndex = index;
  }

  handleEdit(data) {
    this.addUserClicked = false;
    this.editUserClicked = true;
    this.staffToEdit = data;
  }

}
