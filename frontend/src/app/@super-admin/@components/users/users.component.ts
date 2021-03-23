import { Component, Injectable, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable({ providedIn: "root" })
export class UsersComponent implements OnInit {
  allStaffs; allStaffs_; filter: string = 'All Users';
  addUserClicked: boolean = false; lastIndex = 1; staffToEdit; editUserClicked: boolean = false;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allStaffs = this.server.allStaffs;
    if (this.allStaffs == undefined) {
      this.getData()
    }
  }

  getData() {
    this.server.getAllStaffs().subscribe(dat => {
      console.log(dat)
      this.allStaffs = dat.staffLists;
      this.allStaffs_ = dat.staffLists;
    })
  }

  toggleAddUser() {
    this.addUserClicked = true;
    this.editUserClicked = false;
  }

  showMore(index) {
    if (index == this.lastIndex) {
      this.allStaffs[index].more = !this.allStaffs[index].more
    }
    else {
      this.allStaffs[this.lastIndex].more = false
      this.allStaffs[index].more = true
      this.lastIndex = index;
    }
  }

  handleFilter(filter) {
    if (filter == 'all') {
      this.filter = 'All Users'
      this.allStaffs = this.allStaffs_;
    }
    else if (filter == 'active') {
      this.filter = 'Active Users'
      this.allStaffs = this.allStaffs_.filter(dat => dat.status == 0);
    }
    else if (filter == 'inactive') {
      this.filter = 'Inactive Users'
      this.allStaffs = this.allStaffs_.filter(dat => dat.status == 1);
    }
    else if (filter == 'deactivated') {
      this.filter = 'Deactivated Users'
      this.allStaffs = this.allStaffs_.filter(dat => dat.status == 2);
    }
  }

  handleEdit(data) {
    this.addUserClicked = false;
    this.editUserClicked = true;
    this.staffToEdit = data;
  }

  handleDeactivate(data) {

  }

}
