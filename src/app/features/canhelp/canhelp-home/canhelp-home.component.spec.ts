import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanhelpHomeComponent } from './canhelp-home.component';

describe('CanhelpHomeComponent', () => {
  let component: CanhelpHomeComponent;
  let fixture: ComponentFixture<CanhelpHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanhelpHomeComponent]
    });
    fixture = TestBed.createComponent(CanhelpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
