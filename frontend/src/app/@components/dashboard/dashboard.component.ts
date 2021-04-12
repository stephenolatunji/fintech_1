import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { environment } from 'src/environments/environment';
declare var $: any;
declare var Stripe;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  stripe;
  public top10=[{},{},{}]; pendingOrders; top10Index = 4; buttonText = 'View more'; paymentHandler: any = null; paymentSuccessful: boolean = true;
  timeCount = {
    status: true,
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  };

  loading: boolean = false;

  constructor(
    private rout: Router,
    private server: ServerService,
    private actRout: ActivatedRoute,
    private toast: ToastService
  ) { }

  ngOnInit(): void {


    // $('#payment-success').modal('hide');

    this.server.getPendingOrders_ == undefined ? this.fetchPendingOrders() : (this.pendingOrders = this.server.getPendingOrders_, this.countDown())
    this.server.getTop10Listing_ == undefined ? this.fetchTop10() : this.top10 = this.server.getTop10Listing_

  }

  createOrder() {
    this.rout.navigate(['listing'])
  }

  fetchPendingOrders() {
    this.server.getPendingOrders().subscribe(data => {
      console.log(data.entity)
      if (data.entity.length > 0) {
        this.server.getPendingOrders_ = data.entity[0].order;
        this.pendingOrders = data.entity[0].order;
        // counter
        this.countDown();

        // cehckIfDoneWithPayment
        this.checkIfComingFromPaymentPlatform()
      }
      else {
        this.pendingOrders = undefined;
      }
    })
  }

  paynow(amount) {
    this.server.pendingOrders = this.pendingOrders;
    this.toast.toast('info', `Please wait...`);
    this.loading = true;
    (this.pendingOrders.myCurrency == 'NGN' || this.pendingOrders.myCurrency == 1) ? this.usePayStack() : this.usePayStack()
    // setTimeout(() => {
    //   this.handlePayment(amount)  
    // }, 2000);
  }

  useStripe() {
    console.log(this.pendingOrders)
    this.server.createCardPayment(this.pendingOrders).subscribe(data => {
      this.pendingOrders.sessionId = data.entity;
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
      console.log(dat);
      this.loading = false
      if (dat.status) {
        console.log(dat);
        window.location.href = dat.data.authorization_url;
      }
    }, err => this.toast.toast('error', 'Error initializing your payment'))
  }

  fetchTop10() {
    this.server.getTop10Listing().subscribe(data => {
      this.server.getTop10Listing_ = data.entity;
      this.top10 = data.entity;
    })
  }

  view(payment) {
    this.server.pendingOrders = payment;
    this.rout.navigate(['summary'])
  }

  swap(payment) {
    console.log(payment);
    this.server.pendingOrders = payment;
    this.server.whoToSeeResponse = 'dashboard';
    this.rout.navigate(['summary'])
    // this.toast.toast('info','Please wait...')
    // this.loading = true;
    // (payment.myCurrency == 'NGN') ? this.usePayStack() : this.usePayStack()
  }

  viewMore() {
    if (this.buttonText == 'View more') {
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
  }

  countDown() {
    // refereceTime = date we re counting to
    const referenceTime = new Date(this.pendingOrders.createdDate).getTime() + (12 * 60 * 60 * 1000);
    // Update the count down every 1 second
    setInterval(() => {
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


  seePendingOrder() {
    document.getElementById('summaryClass').style.display = 'none';
    setTimeout(() => {
      document.getElementById('summaryClass').style.display = 'block';
    }, 100);
  }

  handlePayStackReference(ref) {
    this.server.payStackReference(ref, this.pendingOrders).subscribe((dat: any) => {
      console.log(dat)
      if (dat.succeeded) {
        this.rout.navigate(['dashboard']);
        $('#payment-success').modal('show')
        // remember to uncomment ds...used 
      }
      else {
        $('#payment-success').modal('hide')
        this.toast.toast('error', "Error while verifying your payment")
        // this.rout.navigate(['dashboard'])
      }
    })
  }

  handleGetPaymentIntent() {
    this.server.handleGetPaymentIntent(this.pendingOrders).subscribe((dat: any) => {
      console.log(dat)
      if (dat.succeeded) {
        // set coming from stripe back to false
        this.server.comingFromStripe = false;
        $('#payment-success').modal('show')
      }
      else {
        $('#payment-success').modal('hide')
        this.toast.toast('error', "Error validating your payment")
      }
    })
  }

  checkIfComingFromPaymentPlatform() {

    // checkIfAmRoutedFromPaymentPlatform
    this.actRout.queryParams.subscribe(params => {
      console.log(params);
      
      if (params.reference !== undefined) {
        // handle send reference and order detais to backend
        this.handlePayStackReference(params.reference);
      }
      else if (this.server.comingFromStripe) {
        this.handleGetPaymentIntent()
      }
    })
  }


}
