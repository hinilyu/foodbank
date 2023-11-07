import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpDetailComponent } from './needhelp-detail.component';

describe('NeedhelpDetailComponent', () => {
  let component: NeedhelpDetailComponent;
  let fixture: ComponentFixture<NeedhelpDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedhelpDetailComponent]
    });
    fixture = TestBed.createComponent(NeedhelpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
