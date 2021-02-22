import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@theme/services/server.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  success: boolean = false; data;
  constructor(private server: ServerService, private rout: Router) { }

  ngOnInit(): void {
    console.log(this.server.matchFound)
    if(this.server.matchFound.succeeded) {
      this.data = this.server.matchFound.entity;
      this.success = true;
    }

    else if(this.server.matchFound == 'No Match Found') {
      this.success = false
    }

    else {
      this.rout.navigate(['listing'])
    }

  }

}
