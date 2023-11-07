import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAnnouncementComponent } from './staff-announcement.component';

describe('StaffAnnouncementComponent', () => {
  let component: StaffAnnouncementComponent;
  let fixture: ComponentFixture<StaffAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffAnnouncementComponent]
    });
    fixture = TestBed.createComponent(StaffAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
