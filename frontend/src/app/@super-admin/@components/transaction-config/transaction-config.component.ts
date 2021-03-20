import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-transaction-config',
  templateUrl: './transaction-config.component.html',
  styleUrls: ['./transaction-config.component.css']
})
export class TransactionConfigComponent implements OnInit {
  private loading: boolean = false;
  transactionDetails = {
    transactionFee: '', currency: '', transactionLimit: '', staffId: localStorage.getItem('userId')
  }
  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true;
    this.server.createtransactionlimit(this.transactionDetails).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
        this.openSnackBar("Transaction Limit Set")
      }
    })
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
