import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIvanComponent } from './login-ivan.component';

describe('LoginIvanComponent', () => {
  let component: LoginIvanComponent;
  let fixture: ComponentFixture<LoginIvanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginIvanComponent]
    });
    fixture = TestBed.createComponent(LoginIvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
