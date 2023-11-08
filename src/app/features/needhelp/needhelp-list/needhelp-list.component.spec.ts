import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpListComponent } from './needhelp-list.component';

describe('NeedhelpListComponent', () => {
  let component: NeedhelpListComponent;
  let fixture: ComponentFixture<NeedhelpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedhelpListComponent]
    });
    fixture = TestBed.createComponent(NeedhelpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
