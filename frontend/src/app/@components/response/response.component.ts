import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
declare var $: any;
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})

export class ResponseComponent implements OnInit {
  @Input() data; loading: boolean = false;
  success: boolean = false;
  
  constructor(private server: ServerService, private rout: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.data == 'No Match Found') {
      this.success = false
    }
    else {
      this.success = true;
    }
    $('#myModal').modal('show')

  }

  close() {
    $('#myModal').modal('hide')
  }

  backToListing() {
    this.rout.navigate(['listing']);
  }

  payNow() {
    this.data.customerId = localStorage.getItem('customerId');
    this.server.pendingOrders = this.data;
    console.log(this.data)
    this.loading = true;
    this.server.createAndMatchOrder(this.data).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded && dat.entity!==null) {
        this.server.pendingOrders = dat.entity;
        this.close();
        this.rout.navigate(['payment-gateway'])
      }
      else {
        this.openSnackBar('Error while proccessing your request!')
      }
        console.log(dat)
    }, err => this.openSnackBar('Error while proccessing your request!'))
  }

  payLater() {
    this.rout.navigate(['dashboard']);
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

}
