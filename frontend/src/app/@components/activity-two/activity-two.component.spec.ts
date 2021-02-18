import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTwoComponent } from './activity-two.component';

describe('ActivityTwoComponent', () => {
  let component: ActivityTwoComponent;
  let fixture: ComponentFixture<ActivityTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
