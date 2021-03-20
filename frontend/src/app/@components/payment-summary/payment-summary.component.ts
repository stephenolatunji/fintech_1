import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.css']
})
export class PaymentSummaryComponent implements OnInit {
  paymentSummary;
  constructor(private server: ServerService, private rout: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
    if(this.server.pendingOrders!==undefined) {
=======
    if (this.server.pendingOrders !== undefined) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.paymentSummary = this.server.pendingOrders;
    }
    else {
      window.history.back();
    }
  }

  handleRout() {
    this.rout.navigate(['dashboard'])
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
