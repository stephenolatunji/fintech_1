import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public items = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }

}
