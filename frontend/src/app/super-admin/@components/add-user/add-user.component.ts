import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userFunc: UsersComponent) { }

  ngOnInit(): void {
  }

  goBack() {
    this.userFunc.addUserClicked = false
  }

}
