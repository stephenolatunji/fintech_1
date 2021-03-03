import { Component, Injectable, OnInit } from '@angular/core';
import { SuperServiceService } from 'src/app/@super-admin/@theme/service/super-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable({providedIn: "root"})
export class UsersComponent implements OnInit {
  allCutomers;
  addUserClicked: boolean = false;
  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allCutomers = this.server.allCustomers;
    if(this.allCutomers == undefined) {
      this.server.getAllCustomers().subscribe(dat=>{console.log(dat)
        this.allCutomers = dat.entity;
      })
    }
  }

  toggleAddUser() {
    this.addUserClicked = true;
  }

}
