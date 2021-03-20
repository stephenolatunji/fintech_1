import { Component, Injectable, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
<<<<<<< HEAD
@Injectable({providedIn: 'root'})
=======
@Injectable({ providedIn: 'root' })
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec

export class TransactionReportComponent implements OnInit {
  tab1: boolean = true; tab2: boolean = false; tab3: boolean = false; top10Reports = 10; viewReport: boolean = false;
  allReports; loading: boolean = false; dataForViewReport;

  constructor(private service: SuperServiceService) { }

  ngOnInit(): void {
    this.allReports = this.service.allTransaction;
    this.allReports == undefined ? this.getData() : null
  }

  viewMore() {
    this.top10Reports = this.allReports.length
  }
  viewLess() {
    this.top10Reports = 10
  }

  getData() {
    this.loading = true;
<<<<<<< HEAD
    this.service.getAllTransactions().subscribe(dat=>{
=======
    this.service.getAllTransactions().subscribe(dat => {
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
      this.loading = false;
      this.allReports = dat.entity;
    }, err => alert('I encountered an error'))
  }

  visualize(data) {
    this.dataForViewReport = data;
    this.viewReport = true;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
