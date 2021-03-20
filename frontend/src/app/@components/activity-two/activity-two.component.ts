import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html',
  styleUrls: ['./activity-two.component.css']
})
export class ActivityTwoComponent implements OnInit {
<<<<<<< HEAD
  transactions; selectedTransaction = {transaction: null, index: null};
=======
  transactions; selectedTransaction = { transaction: null, index: null };
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  constructor(private server: ServerService) { }

  ngOnInit(): void {
    // this.fetchTransactions()
  }

  setTransaction(transaction, index) {
<<<<<<< HEAD
    this.selectedTransaction = {transaction, index};
=======
    this.selectedTransaction = { transaction, index };
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  // fetchTransactions() {
  //   this.server.getTransactions().subscribe(data=>{
  //     if(data.entity > 0) {
  //       this.transactions = data.entity;
  //       // default
  //       this.setTransaction(this.transactions[0], 0)
  //     }
  //     else {
  //       // no transaction
  //     }
  //   })
  // }
<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
