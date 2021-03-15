import { Component, Injectable, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

@Injectable({providedIn: "root"})

export class ResponseComponent implements OnInit {
  stripe;
  @Input() data; loading: boolean = false;  paymentHandler:any = null; paymentSuccessful: boolean = false
  success: boolean = false;
  
  constructor(private server: ServerService, private rout: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    $('#payment-success').modal('hide')
    if(this.data == 'No Match Found') {
      this.success = false
    }
    else {
      // this.invokeStripe();
      this.success = true;
    }
    $('#myModal').modal('show')

  }

  close() {
    $('#myModal').modal('hide')
    this.rout.navigate(['dashboard']);
  }

  backToListing() {
    $('#myModal').modal('hide')
    this.rout.navigate(['listing']);
  }

  payNow() {
    this.data.customerId = localStorage.getItem('customerId');
    this.server.pendingOrders = this.data;
  
    this.loading = true;
    this.server.createAndMatchOrder(this.data).subscribe(dat=>{
      console.log(dat)
      this.loading = false;
      if(dat.succeeded && dat.entity!==null) {
        this.server.pendingOrders = dat.entity;
        this.close();
        // Use if statement to know if using paystack or Stripe
        (dat.entity.myCurrency == 'NGN') ? this.usePayStack() :  this.usePayStack()
      }
      else {
        this.openSnackBar('Error while proccessing your request!')
      }
      
    }, err => this.openSnackBar('Error while proccessing your request!'))
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
  
  // handlePayment(amount) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_test_51IAFmIEHcxMTVy8njPaKBkcPepezj949SZsi15fo8JEe5S4Kt7dR7DlOKZJtncNDZXs8If7SeE63fAXzrblrSGhz00sJSnHAqB',
  //     locale: 'auto',
  //     token:  (stripeToken: any) => {
        
  //       console.log(stripeToken)
  //       console.log(this.server.pendingOrders)
  //       $('#payment-success').modal('show')
  //     }
  //   });
  
  //   paymentHandler.open({
  //     name: 'Anelloh',
  //     description: 'Payment',
  //     amount: amount * 100
  //   });
  // }

  // invokeStripe() {
  //   if(!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement("script");
  //     script.id = "stripe-script";
  //     script.type = "text/javascript";
  //     script.src = "https://checkout.stripe.com/checkout.js";
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51IAFmIEHcxMTVy8njPaKBkcPepezj949SZsi15fo8JEe5S4Kt7dR7DlOKZJtncNDZXs8If7SeE63fAXzrblrSGhz00sJSnHAqB',
  //         locale: 'auto',
  //         token:  (stripeToken: any) =>{
  //           console.log(stripeToken)
  //         }
  //       });
  //     }
        
  //     window.document.body.appendChild(script);
  // }}

  useStripe(pendingOrders) {
    
    this.server.createCardPayment(pendingOrders).subscribe(data=>{
      console.log(data)
        if(data.succeeded) {
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
    this.server.handlePayStack().subscribe((dat: any)=>{console.log(dat)
      this.loading = false
      if(dat.status) {
        window.location.href = dat.data.authorization_url;
      }
    }, err => this.openSnackBar('Error initializing your payment'))
  }

}
