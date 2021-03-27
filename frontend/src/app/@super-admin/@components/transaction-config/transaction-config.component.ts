import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
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
  constructor(private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true;
    this.server.createtransactionlimit(this.transactionDetails).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
        this.toast.toast('info', "Transaction Limit Set")
      }
    })
  }



}
