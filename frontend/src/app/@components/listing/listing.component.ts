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
    customerId: null,
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
    findMach: false
   }
   
  constructor(private server: ServerService, private _snackBar: MatSnackBar, private rout: Router) { }

  ngOnInit(): void {

  }

  doCalculation() {
    (this.order.myCurrency=='NGN')?
    this.order.convertedAmount = this.order.myAmount / this.order.rate :
    this.order.convertedAmount = this.order.myAmount * this.order.rate 
  }

  checkIfAllInput(x) {
    if(this.order.myAmount!==null && this.order.rate!==null && this.order.myAccountNumber!==null && this.order.bankRouteNo!==null) {
      this.order.myAccountNumber = this.order.myAccountNumber.toString();
      this.order.bankRouteNo = this.order.bankRouteNo.toString();

      x=='findMatch'? this.findMatch() : this.publish()
    }
    else {
      this.openSnackBar('All fields must be filled correctly...');
    }
  }

  findMatch() {
    this.loading.findMach = true;
    this.server.createOrder(this.order).subscribe(data=>{
      this.loading.findMach = false;
      if(data.succeeded) {
        this.openSnackBar('Finding Match...');
        this.server.matchFound = data;
        this.rout.navigate(['response']);
      }
      else {
        this.server.matchFound = 'No Match Found';
        this.rout.navigate(['response']);
        this.openSnackBar(data.messages[0]);
      }
    }, err => {
      this.loading.findMach = false;
      this.openSnackBar('Error!');
    })
  }

  publish() {
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
