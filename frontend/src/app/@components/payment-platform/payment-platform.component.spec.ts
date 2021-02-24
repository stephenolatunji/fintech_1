import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlatformComponent } from './payment-platform.component';

describe('PaymentPlatformComponent', () => {
  let component: PaymentPlatformComponent;
  let fixture: ComponentFixture<PaymentPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
