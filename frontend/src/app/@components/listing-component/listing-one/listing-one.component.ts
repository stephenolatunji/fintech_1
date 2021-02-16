import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-one',
  templateUrl: './listing-one.component.html',
  styleUrls: ['./listing-one.component.css']
})
export class ListingOneComponent implements OnInit {
  public items = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit(): void {
  }

}
