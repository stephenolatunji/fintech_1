import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
@Injectable({providedIn: 'root'})

export class TransactionReportComponent implements OnInit {
  tab1: boolean = true; tab2: boolean = false; tab3: boolean = false; top10Reports = 10; viewReport: boolean = true;
  allReports = [ {status: 1}, {status: 1}, {status: 1}, {status: 1},  {status: 1}, {status: 1}, {status: 1}, {status: 1},  {status: 1}, {status: 1}, {status: 1}, {status: 1} ]
  constructor() { }

  ngOnInit(): void {
  }

  viewMore() {
    this.top10Reports = this.allReports.length
  }
  viewLess() {
    this.top10Reports = 10
  }
}
