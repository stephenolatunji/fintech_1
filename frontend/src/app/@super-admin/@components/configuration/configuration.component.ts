import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  tab1: boolean = true; tab2: boolean = false; tab3: boolean = false;

  marketRate = {
    firstInput: 'NGN', secondInput: 'NGN'
  }

  constructor() { }

  ngOnInit(): void {
  }

  switchTab(tab) {
    this.setTabsId();
    if (tab == 3) {
      document.getElementById('tab3').style.backgroundColor = '#F0F4F5'
      this.tab3 = true;
    }
    else if (tab == 2) {
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
