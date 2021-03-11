import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-channel',
  templateUrl: './payment-channel.component.html',
  styleUrls: ['./payment-channel.component.css']
})
export class PaymentChannelComponent implements OnInit {
  
  addPaymentChannel: boolean = false;
  editPaymentChannel: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
