import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { timeCount } from 'rxjs';
import { HelperService } from 'src/app/@theme/services/helper.service';
import { ServerService } from 'src/app/@theme/services/server.service';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public top10; pendingOrders; top10Index = 4; buttonText = 'View more'; paymentHandler:any = null; paymentSuccessful: boolean = true;
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
    private helper: HelperService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    // $('#payment-success').modal('hide')
    this.fetchPendingOrders();
    this.fetchTop10()
    this.invokeStripe();  
  }

  createOrder() {
    this.rout.navigate(['listing'])
  }

  fetchPendingOrders() {
    this.server.getPendingOrders().subscribe(data=>{console.log(data.entity)
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

  paynow(amount){
    this.server.pendingOrders = this.pendingOrders;
    this.openSnackBar(`You will be redirected to our payment platform soon`);
    setTimeout(() => {
      this.handlePayment(amount)  
    }, 2000);
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
    this.server.unfullfilledOrder = this.pendingOrders;
    // set staus that we are coming from onclick unfulfil
    this.server.unfullfilledOrder.status = true;
    this.rout.navigate(['listing'])
    console.log(this.pendingOrders)
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

  handlePayment(amount) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IAFmIEHcxMTVy8njPaKBkcPepezj949SZsi15fo8JEe5S4Kt7dR7DlOKZJtncNDZXs8If7SeE63fAXzrblrSGhz00sJSnHAqB',
      locale: 'auto',
      token:  (stripeToken: any) => {
        console.log(stripeToken)
        console.log(this.pendingOrders)
        $('#payment-success').modal('show')
      }
    });
  
    paymentHandler.open({
      name: 'Anelloh',
      description: 'Payment',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51IAFmIEHcxMTVy8njPaKBkcPepezj949SZsi15fo8JEe5S4Kt7dR7DlOKZJtncNDZXs8If7SeE63fAXzrblrSGhz00sJSnHAqB',
          locale: 'auto',
          token:  (stripeToken: any) =>{
            console.log(stripeToken)
          }
        });
      }
        
      window.document.body.appendChild(script);
  }}

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

  seePendingOrder() {
    document.getElementById('summaryClass').style.display = 'none';
    setTimeout(() => {
      document.getElementById('summaryClass').style.display = 'block';
    }, 100);
  }

}
