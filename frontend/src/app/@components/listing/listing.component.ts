import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  public order = {
    customerId: localStorage.getItem('customerId'),
    myAmount: null,
    myCurrency: 'NGN',
    rate: null,
    myAccountNumber: null,
    myBankName: 'access_bank',
    bankRouteNo: null,
    convertedCurrency: 'USD',
    convertedAmount: null
  };

  loading = {
    findMach: false, publish: null
  }
  showResponse: boolean = false; matchFound;

  constructor(private server: ServerService, private _snackBar: MatSnackBar, private rout: Router) { }

  ngOnInit(): void { }

  doCalculation() {
    (this.order.myCurrency == 'NGN') ?
      this.order.convertedAmount = this.order.myAmount / this.order.rate :
      this.order.convertedAmount = this.order.myAmount * this.order.rate
  }

  checkIfAllInput(x) {
    this.showResponse = false;
    if (this.order.myAmount !== null && this.order.rate !== null && this.order.myAccountNumber !== null && this.order.bankRouteNo !== null) {
      this.order.myAccountNumber = this.order.myAccountNumber.toString();
      this.order.bankRouteNo = this.order.bankRouteNo.toString();

      x == 'findMatch' ? this.findMatch() : this.handlePublish()
    }
    else {
      this.openSnackBar('All fields must be filled correctly...');
    }
  }

  handlePublish() {
    this.loading.findMach = false;
    this.loading.publish = true;
    this.server.createOrder(this.order).subscribe(data => {
      this.loading.publish = false;
      if (data.succeeded) {
        this.openSnackBar('Finding Match...');
        this.matchFound = data;
        this.showResponse = true
      }
      else {
        this.matchFound = 'No Match Found';
        this.showResponse = true;
        this.openSnackBar(data.messages[0]);
      }
    }, err => {
      this.loading.publish = false;
      this.openSnackBar('Error!');
    })
  }

  findMatch() {
    this.loading.findMach = true;
    this.loading.publish = false;
    this.server.findMatch(this.order).subscribe(data => {
      this.loading.findMach = false;
      if (data.succeeded) {
        this.openSnackBar('Finding Match...');
        this.matchFound = data;
        this.showResponse = true
      }
      else {
        this.matchFound = 'No Match Found';
        this.showResponse = true;
        this.openSnackBar(data.messages[0]);
      }
    }, err => {
      this.loading.findMach = false;
      this.openSnackBar('Error!');
    })
  }

  toggelePrefferdCurrency(currency) {
    this.order.convertedCurrency = currency;
    document.getElementById('usd').style.border = '0px'
    document.getElementById('cad').style.border = '0px'
    document.getElementById('eur').style.border = '0px'
    document.getElementById('gbp').style.border = '0px'
    document.getElementById(currency.toLowerCase()).style.border = '1px solid #26474E'
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}