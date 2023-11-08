import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedhelpMapComponent } from './needhelp-map.component';

describe('NeedhelpMapComponent', () => {
  let component: NeedhelpMapComponent;
  let fixture: ComponentFixture<NeedhelpMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeedhelpMapComponent]
    });
    fixture = TestBed.createComponent(NeedhelpMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
