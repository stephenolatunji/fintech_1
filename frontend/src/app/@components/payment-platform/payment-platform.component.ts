import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-payment-platform',
  templateUrl: './payment-platform.component.html',
  styleUrls: ['./payment-platform.component.css']
})
export class PaymentPlatformComponent implements OnInit {
  paymentSummary;
  constructor(private server: ServerService, private rout: Router) { }

  ngOnInit(): void {
    if(this.server.pendingOrders!==undefined) {
      this.paymentSummary = this.server.pendingOrders;
    }
    else {
      window.history.back();
    }
  }

}
