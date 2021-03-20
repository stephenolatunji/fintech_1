import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-payment-channel',
  templateUrl: './payment-channel.component.html',
  styleUrls: ['./payment-channel.component.css']
})
export class PaymentChannelComponent implements OnInit {
<<<<<<< HEAD
  
=======

>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  addPaymentChannel: boolean = false;
  editPaymentChannel: boolean = false;
  channelToEdit; allPaymentChannel;

  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allPaymentChannel = this.server.allPaaymentChannel;
<<<<<<< HEAD
    if(this.allPaymentChannel == undefined) {
=======
    if (this.allPaymentChannel == undefined) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.getData()
    }
  }

  getData() {
<<<<<<< HEAD
    this.server.getAllPaymentChannel().subscribe(dat=>{
=======
    this.server.getAllPaymentChannel().subscribe(dat => {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
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


<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
