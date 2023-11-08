import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScanComponent } from './staff-scan.component';

describe('StaffScanComponent', () => {
  let component: StaffScanComponent;
  let fixture: ComponentFixture<StaffScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffScanComponent]
    });
    fixture = TestBed.createComponent(StaffScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
