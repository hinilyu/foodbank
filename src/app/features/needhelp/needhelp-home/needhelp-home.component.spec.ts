import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpHomeComponent } from './needhelp-home.component';

describe('NeedhelpHomeComponent', () => {
  let component: NeedhelpHomeComponent;
  let fixture: ComponentFixture<NeedhelpHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedhelpHomeComponent]
    });
    fixture = TestBed.createComponent(NeedhelpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
