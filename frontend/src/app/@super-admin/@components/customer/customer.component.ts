import { Component, OnInit } from '@angular/core';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  tab1: boolean = true; tab2: boolean = false; tab3: boolean = false;
  allCustomers;  filter: string; viewCustomerProfile: boolean = false;
  profileOfCustomer; allCustomers_;

  constructor(private server: SuperServiceService) { }

  ngOnInit(): void {
    this.allCustomers = this.server.allCustomers;
    this.handleFilter('all');
    if(this.allCustomers == undefined) {
      this.server.getAllCustomers().subscribe(dat=>{
        this.allCustomers = dat.entity;
        this.allCustomers_ = dat.entity;
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

  handleFilter(x) {
    document.getElementById('all').style.backgroundColor = 'transparent';
    document.getElementById('blocked').style.backgroundColor = 'transparent';
    document.getElementById('disabled').style.backgroundColor = 'transparent';
    if(x=='all') {
      this.filter = 'All Customers'
      this.allCustomers = this.allCustomers_;
      document.getElementById('all').style.backgroundColor = '#E9EDED';

    }
    else if(x=='blocked') {
      this.filter = 'Blocked Customers'
      this.allCustomers = this.allCustomers_.filter(dat=>dat.status == 0);
      document.getElementById('blocked').style.backgroundColor = '#E9EDED';
    }
    else if(x=='disabled') {
      this.filter = 'Disabled Customers'
      this.allCustomers = this.allCustomers_.filter(dat=>dat.status == 0);
      document.getElementById('disabled').style.backgroundColor = '#E9EDED';
    }
  }

  back() {
    this.viewCustomerProfile = false;
  }

  handleShowProfile(customer) {
    this.profileOfCustomer = customer;
    this.viewCustomerProfile = true;
  }

  handleSetCustomer(x) {
    
  }

}
