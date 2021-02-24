import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';
declare var $: any;
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})

export class ResponseComponent implements OnInit {
  @Input() data;
  success: boolean = false;
  
  constructor(private server: ServerService, private rout: Router) { }

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
    this.server.pendingOrders = this.data;
  }

  payLater() {
    this.rout.navigate(['dashboard']);
  }

}
