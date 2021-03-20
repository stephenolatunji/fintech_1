import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuperServiceService } from '../../@theme/service/super-service.service';

@Component({
  selector: 'app-market-rate',
  templateUrl: './market-rate.component.html',
  styleUrls: ['./market-rate.component.css']
})
export class MarketRateComponent implements OnInit {
  marketRate = {
    usd: '', gbp: '', cad: '', eur: '', staffId: localStorage.getItem('userId')
  }
  loading: boolean = false;
  constructor(private server: SuperServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.loading = true;
    // this.server.newMarketRate(this.marketRate).subscribe(dat=>{
    //   this.loading = false;
    //   if(dat.succeeded) {
    //     this.openSnackBar("Market Rate Added Successfully!")
    //   }
    // })
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
