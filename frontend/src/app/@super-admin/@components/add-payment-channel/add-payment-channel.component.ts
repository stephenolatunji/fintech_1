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
<<<<<<< HEAD
    this.server.newPaymentChannel(this.paymentChannel).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
=======
    this.server.newPaymentChannel(this.paymentChannel).subscribe(dat => {
      this.loading = false;
      if (dat.succeeded) {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
        this.openSnackBar("Payment Channel Added")
      }
      else {
        this.openSnackBar("Error while adding channel")
      }
<<<<<<< HEAD
    }, err=> {this.openSnackBar("Error while adding channel"); this.loading = false})
=======
    }, err => { this.openSnackBar("Error while adding channel"); this.loading = false })
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }


  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
<<<<<<< HEAD


=======
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
