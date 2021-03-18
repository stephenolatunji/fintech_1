import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true;
    this.server.newPaymentChannel(this.paymentChannel).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
        this.openSnackBar("Payment Channel Added")
      }
      else {
        this.openSnackBar("Error while adding channel")
      }
    }, err=> {this.openSnackBar("Error while adding channel"); this.loading = false})
  }


  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}


