import { Component, Input, OnInit } from '@angular/core';
import { TransactionReportComponent } from '../transaction-report/transaction-report.component';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  @Input() data;
  constructor(private report: TransactionReportComponent) { }

  ngOnInit(): void {
  }

  back() {
    this.report.viewReport = false;
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
