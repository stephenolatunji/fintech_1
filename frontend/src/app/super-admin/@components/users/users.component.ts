import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
@Injectable({providedIn: "root"})
export class UsersComponent implements OnInit {
  users = [{status: 1}, {status: 0}, {status: 1}, {status: 1}, {status: 0}]
  addUserClicked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddUser() {
    this.addUserClicked = true;
  }

}
