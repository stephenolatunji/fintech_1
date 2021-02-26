import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationSuccessComponent } from './verification-success.component';

describe('VerificationSuccessComponent', () => {
  let component: VerificationSuccessComponent;
  let fixture: ComponentFixture<VerificationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
