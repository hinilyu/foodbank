import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signup: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(3)]),
      confirmPassword: new FormControl('', [Validators.required]),
      fname: new FormControl(),
      lname: new FormControl(),
      postal: new FormControl(),
    },
    { validators: passwordMatchingValidatior }
  );

  hide = true;
  hide_confirm = true;
  get emailInput() {
    return this.signup.get('email');
  }
  get passwordInput() {
    return this.signup.get('password');
  }
  get confirmPassword() {
    return this.signup.get('confirmPassword');
  }
  get postal() {
    return this.signup.get('postal');
  }
  get firstName() {
    return this.signup.get('fname');
  }
  get lastName() {
    return this.signup.get('lanme');
  }
}

export const passwordMatchingValidatior: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value
    ? null
    : { notmatched: true };
};
