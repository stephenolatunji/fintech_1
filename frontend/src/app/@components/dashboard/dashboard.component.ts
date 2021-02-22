import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public items = [1, 2, 3, 4, 5]
  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  createOrder() {
    this.rout.navigate(['listing'])
  }

}
