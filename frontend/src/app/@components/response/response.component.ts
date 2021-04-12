import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
import { environment } from 'src/environments/environment';
declare var $: any;
declare var Stripe;

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})

@Injectable({ providedIn: "root" })

export class ResponseComponent implements OnInit {
  stripe; whoToSeeResponse; allBanks; intBanks;
  @Input() data; loading: boolean = false; paymentHandler: any = null; paymentSuccessful: boolean = false
  success: boolean = true;

  destination = {
    bank: '', accountNumber: '', routingNumber: ''
  }

  constructor(private server: ServerService, private rout: Router, private toast: ToastService) { }

  ngOnInit(): void {
    $('#payment-success').modal('hide');

    this.server.whoToSeeResponse !== 'listing'?
    this.data = this.server.pendingOrders : null;
    if(this.data!==undefined) {
      this.allBanks = this.data.myCurrency == 'NGN' || this.data.myCurrency == 1?
      this.server?.allBanks?.data : this.server?.intBanks?.data;
      this.whoToSeeResponse = this.server.whoToSeeResponse;
      if (this.data == 'No Match Found') {
        this.success = false
      }
      else {
        // this.invokeStripe();
        this.success = true;
      }
      $('#myModal').modal('show')
    }
    else {
      this.rout.navigate(['dashboard'])
    }

  }

  close() {
    $('#myModal').modal('hide')
    this.rout.navigate(['dashboard']);
  }

  // backToListing() {
  //   $('#myModal').modal('hide')
  //   this.rout.navigate(['listing']);
  // }

  payNow(x) {
    if(x=='dashboard') {console.log(this.destination);
      this.loading = true;
      this.server.pendingOrders.accountNumber = this.destination.accountNumber
      this.server.pendingOrders.bank = this.destination.bank
      this.server.pendingOrders.routingNumber = this.destination.routingNumber;
      this.server.pendingOrders.myCurrency = this.server.pendingOrders.myCurrency == 'NGN'? 1 : this.server.pendingOrders.myCurrency == 'USD'? 2 : this.server.pendingOrders.myCurrency == 'GBP' ? 3 : this.server.pendingOrders.myCurrency == 'CAD' ? 4 : 5;
      this.server.pendingOrders.convertedCurrency = this.server.pendingOrders.convertedCurrency == 'NGN'? 1 : this.server.pendingOrders.convertedCurrency == 'USD'? 2 : this.server.pendingOrders.convertedCurrency == 'GBP' ? 3 : this.server.pendingOrders.convertedCurrency == 'CAD' ? 4 : 5;
      this.server.findMatch(this.server.pendingOrders).subscribe(data => {
        console.log(data);
        this.loading = true;
        this.whoToSeeResponse = 'listing'        
      })

    }

    else {
      this.data.customerId = localStorage.getItem('customerId');
      this.server.pendingOrders = this.data;
      this.loading = true;
  
      this.server.createAndMatchOrder(this.data).subscribe(dat => {
        console.log(dat)
        this.loading = false;
        if (dat.succeeded && dat.entity !== null) {
          this.server.pendingOrders = dat.entity;
          this.close();
          // Use if statement to know if using paystack or Stripe
          (dat.entity.myCurrency == 'NGN' || dat.entity.myCurrency == 1) ? this.usePayStack() : this.usePayStack()
        }
        else {
          this.toast.toast('error', 'Error while proccessing your request!')
        }
      }, err => this.toast.toast('error', 'Error while proccessing your request!'))
    }

  
  }



  useStripe(pendingOrders) {

    this.server.createCardPayment(pendingOrders).subscribe(data => {
      console.log(data)
      if (data.succeeded) {
        this.stripe = Stripe(`${environment.stripeToken}`);
        this.server.comingFromStripe = true;
        this.stripe.redirectToCheckout({ sessionId: data.entity });
        this.loading = false;
      }
      else {
        this.loading = false;
      }
    })
  }

  usePayStack() {
    this.server.handlePayStack().subscribe((dat: any) => {
      console.log(dat)
      this.loading = false
      if (dat.status) {
        window.location.href = dat.data.authorization_url;
      }
    }, err => this.toast.toast('error', 'Error initializing your payment'))
  }

}
