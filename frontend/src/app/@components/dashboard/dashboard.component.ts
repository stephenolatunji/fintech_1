import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { timeCount } from 'rxjs';
import { HelperService } from 'src/app/@theme/services/helper.service';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public top10; pendingOrders; top10Index = 4; buttonText = 'View more'; 
  timeCount = {
    status: true,
    days: null, 
    hours: null,
    minutes: null,
    seconds: null
  }
  constructor(
    private rout: Router, 
    private server: ServerService,
    private helper: HelperService
    ) { }

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
        // counter
        this.countDown()
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
    this.rout.navigate(['summary'])
  }

  swap(payment) {
    this.server.pendingOrders = payment;
    this.rout.navigate(['payment-gateway'])
  }

  viewMore() {
    if(this.buttonText == 'View more') {
      this.top10Index = this.top10.length;
      this.buttonText = 'View less'
    }
    else {
      this.top10Index = 4;
      this.buttonText = 'View more'
    }
  }

  editPendingOrderAfterExpiration() {

  }


  countDown() {
      // refereceTime = date we re counting to
      const referenceTime = new Date(this.pendingOrders.createdDate).getTime()+(12 * 60 * 60 * 1000);
      // Update the count down every 1 second
      setInterval(()=> {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = referenceTime - now;
  
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // If the count down is finished, write some text
      if (distance < 0) {
        this.timeCount = {
          status: false,
          days, hours, minutes, seconds
        }
        clearInterval();
      }
      
      else {
        this.timeCount = {
          status: true,
          days, hours, minutes, seconds
        }
      }
      
      }, 1000);
  }

}
