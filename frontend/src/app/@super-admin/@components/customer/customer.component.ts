import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  tab1: boolean = true; tab2: boolean = false; tab3: boolean = false;
  allCustomers;

  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allCustomers = this.server.allCustomers;
    if(this.allCustomers == undefined) {
      this.server.getAllCustomers().subscribe(dat=>{
        this.allCustomers = dat.entity;
      })
    }
  }

  
  switchTab(tab) {
    this.setTabsId();
    if(tab == 3) {
      document.getElementById('tab3').style.backgroundColor = '#F0F4F5'
      this.tab3 = true;
    }
    else if(tab == 2) {
      this.tab2 = true;
      document.getElementById('tab2').style.backgroundColor = '#F0F4F5'
    }
    else {
      this.tab1 = true;
      document.getElementById('tab1').style.backgroundColor = '#F0F4F5'
    }
  }

  setTabsId() {
    this.tab1 = this.tab2 = this.tab3 = false;
    document.getElementById('tab1').style.backgroundColor = '#fff';
    document.getElementById('tab2').style.backgroundColor = '#fff';
    document.getElementById('tab3').style.backgroundColor = '#fff';
  }

}
