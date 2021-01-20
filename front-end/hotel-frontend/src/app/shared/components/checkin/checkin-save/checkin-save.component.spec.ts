import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinSaveComponent } from './checkin-save.component';

describe('CheckinCreateComponent', () => {
  let component: CheckinSaveComponent;
  let fixture: ComponentFixture<CheckinSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
