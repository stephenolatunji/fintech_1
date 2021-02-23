import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public top10; pendingOrders;
  constructor(private rout: Router, private server: ServerService) { }

  ngOnInit(): void {
    this.fetchPendingOrders();
    this.fetchTop10()
  }

  createOrder() {
    this.rout.navigate(['listing'])
  }

  fetchPendingOrders() {
    this.server.getPendingOrders().subscribe(data=>{
      if(data.entity.length > 0) {
        this.pendingOrders = data.entity[0].order;
      }
      else {
        this.pendingOrders = undefined;
      }
    })
  }

  paynow(){
    this.server.pendingOrders = this.pendingOrders;
    this.rout.navigate(['payment-gateway'])
  }

  fetchTop10() {
    this.server.getTop10Listing().subscribe(data=>{
      this.top10 = data.entity;
    })
  }

  view(payment) {
    this.server.pendingOrders = payment;
    this.rout.navigate(['summmary'])
  }

  swap(payment) {
    this.server.pendingOrders = payment;
    this.rout.navigate(['payment-gateway'])
  }

}
