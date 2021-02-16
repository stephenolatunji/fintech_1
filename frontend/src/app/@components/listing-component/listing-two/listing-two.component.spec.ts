import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTwoComponent } from './listing-two.component';

describe('ListingTwoComponent', () => {
  let component: ListingTwoComponent;
  let fixture: ComponentFixture<ListingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
