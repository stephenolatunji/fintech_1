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
    $('#successMsg').modal({ backdrop: 'static', keyboard: false });
  }

  closeModal() {
    $('#successMsg').modal('hide'); this.rout.navigate(['login'])
  }

}
