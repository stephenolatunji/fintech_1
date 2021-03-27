import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/@theme/services/toast.service';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-market-rate',
  templateUrl: './market-rate.component.html',
  styleUrls: ['./market-rate.component.css']
})
export class MarketRateComponent implements OnInit {

  @ViewChild('rate') marketRate: ElementRef;

  loading: boolean = false;
  disable = {
    usd: true, cad: true, eur: true, gbp: true
  }; data;
  constructor(private server: SuperServiceService, private toast: ToastService) { }

  ngOnInit(): void {
    this.server.getAllMarketRateConfig().subscribe(dat=>{
      this.data = dat.entity;
      for (let index = 0; index < this.data.length; index++) {
        this.data[index].disabled = true;
      }
    })
  }

  handleSubmit(baseCurrency, marketRate, id) {
    this.loading = true;
    const val = {
      baseCurrency, varibleCurrency: 1, marketRate, id
    }
    this.server.updateMarketRate(val).subscribe(dat=>{
      this.loading = false;
      if(dat.succeeded) {
        this.toast.toast('success', "Market Rate Updated Successfully!")
      }
    })
  }



  handleEdit(index) {
    this.data[index].disabled = false
    setTimeout(() => {
      this.marketRate.nativeElement.focus();
    }, 200);
  }
}
