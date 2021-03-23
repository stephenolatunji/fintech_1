import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
import { ResponseComponent } from '../response/response.component';

@Component({
  selector: 'app-payment-platform',
  templateUrl: './payment-platform.component.html',
  styleUrls: ['./payment-platform.component.css']
})
export class PaymentPlatformComponent implements OnInit {
  paymentSummary; bank: boolean = false; paymentHandler: any = null;
  paymentDetails = {
    cardNumber: '', expiryDate: '', cvv: ''
  }
  constructor(private server: ServerService, private rout: Router) { }

  ngOnInit(): void {
    if (this.server.pendingOrders !== undefined) {
      this.paymentSummary = this.server.pendingOrders;
    }
    else {
      window.history.back();
    }
  }

  paymentType(type) {
    if (type == 'card') {
      document.getElementById('card').style.backgroundColor = '#26474E'
      document.getElementById('bank').style.backgroundColor = '#F0F4F5'
      document.getElementById('bank').style.color = '#26474E'
      document.getElementById('card').style.color = '#F0F4F5'
      this.bank = false
    }
    else {
      document.getElementById('bank').style.backgroundColor = '#26474E'
      document.getElementById('card').style.backgroundColor = '#F0F4F5'
      document.getElementById('bank').style.color = '#F0F4F5'
      document.getElementById('card').style.color = '#26474E'
      this.bank = true
    }
  }

  handlePayment(amount) {

  }

}
