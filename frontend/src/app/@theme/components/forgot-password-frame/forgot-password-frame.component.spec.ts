import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordFrameComponent } from './forgot-password-frame.component';

describe('ForgotPasswordFrameComponent', () => {
  let component: ForgotPasswordFrameComponent;
  let fixture: ComponentFixture<ForgotPasswordFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
