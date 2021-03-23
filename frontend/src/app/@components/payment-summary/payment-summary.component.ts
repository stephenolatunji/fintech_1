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
    if (this.server.pendingOrders !== undefined) {
      this.paymentSummary = this.server.pendingOrders;
    }
    else {
      window.history.back();
    }
  }

  handleRout() {
    this.rout.navigate(['dashboard'])
  }

}
