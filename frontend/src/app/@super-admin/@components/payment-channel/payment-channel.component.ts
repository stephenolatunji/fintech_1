import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-payment-channel',
  templateUrl: './payment-channel.component.html',
  styleUrls: ['./payment-channel.component.css']
})
export class PaymentChannelComponent implements OnInit {
  addPaymentChannel: boolean = false;
  editPaymentChannel: boolean = false;
  channelToEdit; allPaymentChannel;

  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allPaymentChannel = this.server.allPaaymentChannel;
    if (this.allPaymentChannel == undefined) {
      this.getData()
    }
  }

  getData() {
    this.server.getAllPaymentChannel().subscribe(dat => {
      this.allPaymentChannel = dat.entity;
    })
  }

  addChannel() {
    this.addPaymentChannel = true
  }

  back() {
    this.addPaymentChannel = false;
    this.editPaymentChannel = false;
  }

  editChannel(data) {
    this.channelToEdit = data;
    this.editPaymentChannel = true
  }


}
