import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOneComponent } from './listing-one.component';

describe('ListingOneComponent', () => {
  let component: ListingOneComponent;
  let fixture: ComponentFixture<ListingOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
