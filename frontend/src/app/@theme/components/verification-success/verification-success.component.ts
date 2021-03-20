import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-verification-success',
  templateUrl: './verification-success.component.html',
  styleUrls: ['./verification-success.component.css']
})
export class VerificationSuccessComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
<<<<<<< HEAD
    $('#successMsg').modal({backdrop: 'static', keyboard: false}) ;
=======
    $('#successMsg').modal({ backdrop: 'static', keyboard: false });
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
  }

  closeModal() {
    $('#successMsg').modal('hide'); this.rout.navigate(['login'])
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> d44b2faf2995a26ba82439ed846788eb309054ec
