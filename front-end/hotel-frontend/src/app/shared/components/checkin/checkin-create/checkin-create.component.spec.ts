import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCreateComponent } from './checkin-create.component';

describe('CheckinCreateComponent', () => {
  let component: CheckinCreateComponent;
  let fixture: ComponentFixture<CheckinCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
