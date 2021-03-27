import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-add-payment-channel',
  templateUrl: './add-payment-channel.component.html',
  styleUrls: ['./add-payment-channel.component.css']
})
export class AddPaymentChannelComponent implements OnInit {

  public paymentChannel = {
    name: '', currencyCode: 1, feeType: 1, feeRate: '', minTransactionFee: '', maxTransactionFee: '', allowAutoReveresal: false, reversalFeeRate: '', reversalTransactionFee: ''
  }
  loading: boolean = false;

  constructor(private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true;
    this.server.newPaymentChannel(this.paymentChannel).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
        this.toast.toast('success', "Payment Channel Added")
      }
      else {
        this.toast.toast('error', "Error while adding channel")
      }
    }, err => { this.toast.toast('error', "Error while adding channel"); this.loading = false })
  }




}
