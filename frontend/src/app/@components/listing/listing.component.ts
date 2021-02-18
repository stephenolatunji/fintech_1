import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public order = { 
    amount: null, 
    fromCurrency: 'NGN', 
    preferedRateCurrency: 'NGN', 
    preferedRate: null, 
    totalAmount: null, 
    totalAmountCurrency: 'USD',
    bank: 'access_bank',
    accountNumber: null,
    routingNumber: null
   }
  constructor(private server: ServerService) { }

  ngOnInit(): void {
  }

  doCalculation() {
    (this.order.fromCurrency=='NGN')?
    this.order.totalAmount = this.order.amount / this.order.preferedRate :
    this.order.totalAmount = this.order.amount * this.order.preferedRate 
  }

  findMatch() {
    this.server.createOrder(this.order).subscribe(data=>{
      console.log(data)
    })
  }

}
