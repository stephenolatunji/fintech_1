import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-edit-payment-channel',
  templateUrl: './edit-payment-channel.component.html',
  styleUrls: ['./edit-payment-channel.component.css']
})
export class EditPaymentChannelComponent implements OnInit {

  public paymentChannel = {
    id: '', name: '', currencyCode: 1, feeType: 1, feeRate: '', minTransactionFee: '', maxTransactionFee: '', allowAutoReveresal: false, reversalFeeRate: '', reversalTransactionFee: ''
  }
  loading: boolean = false;

  @Input() data;

  constructor(private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
    this.paymentChannel = this.data;
    console.log(this.paymentChannel);
  }

  handleSubmit() {
    this.loading = true;
    this.server.editPaymentChannel(this.paymentChannel).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
        this.toast.toast('success', "Payment Channel Updated")
      }
      else {
        this.toast.toast('error', "Error while updating channel")
      }
    }, err => { this.toast.toast('error', "Error while updating channel"); this.loading = false })
  }




}
