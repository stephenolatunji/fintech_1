import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar) { }

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
        this.openSnackBar("Market Rate Updated Successfully!")
      }
    })
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

  handleEdit(index) {
    this.data[index].disabled = false
    setTimeout(() => {
      this.marketRate.nativeElement.focus();
    }, 200);
  }
}
