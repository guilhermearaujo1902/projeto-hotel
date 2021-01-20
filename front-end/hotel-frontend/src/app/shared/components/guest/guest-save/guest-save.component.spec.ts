import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSaveComponent } from './guest-save.component';

describe('GuestCreateComponent', () => {
  let component: GuestSaveComponent;
  let fixture: ComponentFixture<GuestSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
