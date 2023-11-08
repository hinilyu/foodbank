import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  profileForm: FormGroup = new FormGroup(
    {
      email: new FormControl('leomessi@intermiami.com', [Validators.email, Validators.required]),
      fname: new FormControl('Messi'),
      lname: new FormControl('Lionel'),
      postal: new FormControl('M1K 5E9'),
      numberHoushold: new FormControl('5'),
      phoneNumber: new FormControl('+1-123-456-7890'),
    }
  );
}

