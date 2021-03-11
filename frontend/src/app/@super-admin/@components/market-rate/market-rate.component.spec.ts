import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketRateComponent } from './market-rate.component';

describe('MarketRateComponent', () => {
  let component: MarketRateComponent;
  let fixture: ComponentFixture<MarketRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
