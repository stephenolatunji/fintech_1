import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.paymentChannel = this.data;
    console.log(this.paymentChannel);

  }

  handleSubmit() {
    this.loading = true;
    this.server.editPaymentChannel(this.paymentChannel).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
        this.openSnackBar("Payment Channel Updated")
      }
      else {
        this.openSnackBar("Error while updating channel")
      }
    }, err => { this.openSnackBar("Error while updating channel"); this.loading = false })
  }


  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}