import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
import { ToastService } from 'src/app/@theme/services/toast.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
  public order = {
    customerId: localStorage.getItem('customerId'),
    myAmount: null,
    myCurrency: 1,
    rate: null,
    myAccountNumber: null,
    myBankName: 'Access Bank',
    bankRouteNo: null,
    convertedCurrency: 2,
    convertedAmount: null,
    orderId: null,
    myPaymentChannelId: null,
    transactionFee: null,
    paymentReference: null,
    paymentStatus: null
  };

  public editedOrder: any;

  unfullfilledOrder;
  loading = {
    findMach: false, publish: null
  }
  showResponse: boolean = false; matchFound; allBanks;

  constructor(private server: ServerService, private rout: Router, private http: HttpClient, private toast: ToastService) { }

  ngOnInit(): void {
    // check if we are coming from edit of unfullfilled order
    this.comingFromEditPage()
    // getAllBanksFromServer
    this.allBanks = this.order?.myCurrency==1? this.server?.intBanks?.data : this.server?.allBanks?.data;
  }

  doCalculation() {
    if (this.order.myCurrency == 1) {
      this.order.convertedAmount = this.order.myAmount / this.order.rate
    }
    else {
      setTimeout(() => {
        this.order.convertedCurrency = 1;
        this.order.convertedAmount = this.order.myAmount * this.order.rate
      }, 50);
    }
  }

  checkIfAllInput(x) {
    this.showResponse = false;
    if (this.order.myAmount !== null && this.order.rate !== null && this.order.myAccountNumber !== null) {
      this.order.myAccountNumber = this.order.myAccountNumber.toString();

      x == 'findMatch' ? this.findMatch() : this.handlePublish()
    }
    else {
      this.toast.toast('warning', 'All fields must be filled correctly...');
    }
  }

  handlePublish() {
    this.loading.findMach = false;
    this.loading.publish = true;
    this.server.createOrder(this.order).subscribe(data => {
      this.loading.publish = false;
      if (data.succeeded) {
        this.toast.toast('success','Your Order has been published');
        this.rout.navigate(['dashboard'])
      }
      else {
        this.matchFound = 'We could not publish your order';
        this.toast.toast('error', data.messages[0]);
      }
    }, err => {
      this.loading.publish = false;
      this.toast.toast('error', 'Error!');
    })
  }

  findMatch() {
    this.loading.findMach = true;
    this.loading.publish = false;
    this.server.findMatch(this.order).subscribe(data => {
      this.loading.findMach = false;
      if (data.succeeded && data.entity !== null) {
        this.toast.toast('info','Finding Match...');
        data.entity.myAccountNumber = this.order.myAccountNumber.toString();
        data.entity.myBankName = this.order.myBankName;
        data.entity.bankRouteNo = this.order.bankRouteNo;
        // important: we need to swap ds to match what it should be
        data.entity.convertedAmount = parseFloat(data.entity.myAmount);
        data.entity.myAmount = parseFloat(data.entity.convertedAmount);
        data.entity.convertedCurrency = data.entity.myCurrency;
        data.entity.myCurrency = data.entity.convertedCurrency;

        data.entity.findMatchResult = {
          customerId: data.entity.customerId,
          orderId: data.entity.id,
          orderNo: data.entity.orderNo,
          transactionFee: data.entity.transactionFee,
          orderStatus: data.entity.orderStatus
        }


        this.matchFound = data.entity;
        this.server.whoToSeeResponse = 'listing';
        this.showResponse = true
      }
      else {
        this.matchFound = 'No Match Found';
        this.showResponse = true;
        // this.openSnackBar(data?.messages[0]);
      }
    }, err => {
      this.loading.findMach = false;
      this.toast.toast('error','Error!');
    })
  }

  toggelePrefferdCurrency(identity, currency) {
    this.order.convertedCurrency = identity;
    document.getElementById('usd').style.border = '0px'
    document.getElementById('cad').style.border = '0px'
    document.getElementById('eur').style.border = '0px'
    document.getElementById('gbp').style.border = '0px'
    document.getElementById(currency.toLowerCase()).style.border = '0.5px solid rgba(38, 71, 78, 0.4)'
  }

  comingFromEditPage() {
    this.unfullfilledOrder = this.server.unfullfilledOrder;
    if (this.unfullfilledOrder !== undefined && this.unfullfilledOrder.status) {
      this.order = {
        customerId: localStorage.getItem('customerId'),
        orderId: this.unfullfilledOrder.id,
        myAmount: this.unfullfilledOrder.myAmount,
        myCurrency:
          this.unfullfilledOrder.myCurrency.toUpperCase() == 'NGN' ? 1 :
            this.unfullfilledOrder.myCurrency.toUpperCase() == 'USD' ? 2 :
              this.unfullfilledOrder.myCurrency.toUpperCase() == 'GBP' ? 3 :
                this.unfullfilledOrder.myCurrency.toUpperCase() == 'EUR' ? 4 :
                  this.unfullfilledOrder.myCurrency.toUpperCase() == 'CAD' ? 5 : 1,

        convertedCurrency:
          this.unfullfilledOrder.convertedCurrency.toUpperCase() == 'NGN' ? 1 :
            this.unfullfilledOrder.convertedCurrency.toUpperCase() == 'USD' ? 2 :
              this.unfullfilledOrder.convertedCurrency.toUpperCase() == 'GBP' ? 3 :
                this.unfullfilledOrder.convertedCurrency.toUpperCase() == 'EUR' ? 4 :
                  this.unfullfilledOrder.convertedCurrency.toUpperCase() == 'CAD' ? 5 : 2,

        convertedAmount: this.unfullfilledOrder.convertedAmount,
        rate: this.unfullfilledOrder.rate,
        myAccountNumber: this.unfullfilledOrder.myAccountNumber,
        myBankName: this.unfullfilledOrder.myBankName,
        bankRouteNo: this.unfullfilledOrder.bankRouteNo,
        myPaymentChannelId: this.unfullfilledOrder.myPaymentChannelId,
        transactionFee: this.unfullfilledOrder.transactionFee,
        paymentReference: this.unfullfilledOrder.myPaymentReferenceNo,
        paymentStatus: this.unfullfilledOrder.paymentStatus
      };
    }
  }

  editOrderHandler() {
    this.loading.findMach = true
    this.server.editUnfulfilledOrder(this.order).subscribe(data => {
      this.loading.findMach = false;
      if (data.succeeded) {
        this.toast.toast('success','Order updated!');
        data.entity.myAccountNumber = this.order.myAccountNumber.toString();
        data.entity.myBankName = this.order.myBankName;
        data.entity.bankRouteNo = this.order.bankRouteNo;
        data.entity.convertedAmount = parseFloat(data.entity.convertedAmount);
        data.entity.findMatchResult = {
          customerId: data.entity.customerId,
          orderId: data.entity.id,
          orderNo: data.entity.orderNo,
          transactionFee: data.entity.transactionFee,
          orderStatus: data.entity.orderStatus
        }

        console.log(data.entity)

        this.matchFound = data.entity;
        this.showResponse = true
      }
      else {
        this.toast.toast('error','Error updating your order!')
      }
      console.log(data)
    }, err => { this.loading.findMach = false;  this.toast.toast('error','Error updating your order!') })
  }
}
