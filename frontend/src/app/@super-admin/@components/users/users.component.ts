import { Component, Injectable, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
<<<<<<< HEAD
@Injectable({providedIn: "root"})
=======
@Injectable({ providedIn: "root" })
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
export class UsersComponent implements OnInit {
  allStaffs; allStaffs_; filter: string = 'All Users';
  addUserClicked: boolean = false; lastIndex = 1; staffToEdit; editUserClicked: boolean = false;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allStaffs = this.server.allStaffs;
<<<<<<< HEAD
    if(this.allStaffs == undefined) {
      this.server.getAllStaffs().subscribe(dat=>{console.log(dat)
        this.allStaffs = dat.staffLists;
        this.allStaffs_ = dat.staffLists;
      })
    }
  }

=======
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

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  toggleAddUser() {
    this.addUserClicked = true;
    this.editUserClicked = false;
  }

  showMore(index) {
<<<<<<< HEAD
    if(index == this.lastIndex) {
=======
    if (index == this.lastIndex) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.allStaffs[index].more = !this.allStaffs[index].more
    }
    else {
      this.allStaffs[this.lastIndex].more = false
      this.allStaffs[index].more = true
      this.lastIndex = index;
    }
  }

  handleFilter(filter) {
<<<<<<< HEAD
    if(filter=='all') {
      this.filter = 'All Users'
      this.allStaffs = this.allStaffs_;
    }
    else if(filter=='active') {
      this.filter = 'Active Users'
      this.allStaffs = this.allStaffs_.filter(dat=>dat.status == 0);
    }
    else if(filter=='inactive') {
      this.filter = 'Inactive Users'
      this.allStaffs = this.allStaffs_.filter(dat=>dat.status == 1);
    }
    else if(filter=='deactivated') {
      this.filter = 'Deactivated Users'
      this.allStaffs = this.allStaffs_.filter(dat=>dat.status == 2);
=======
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
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
    }
  }

  handleEdit(data) {
    this.addUserClicked = false;
    this.editUserClicked = true;
    this.staffToEdit = data;
  }

  handleDeactivate(data) {

  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
