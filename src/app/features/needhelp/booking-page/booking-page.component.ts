import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {

  userForm: FormGroup;
  timeslotLabel = 'Please pick one available timeslot';
  bookingLabel = 'Please pick a date below';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      location: [''],
      day: [''], 
      timeSlot: [''],
      firstName: { value: 'Messi', disabled: true },
      lastName: { value: 'Lionel', disabled: true },
      householdMembers: { value: '5', disabled: true },
      phoneNumber: { value: '+1-123-456-7890', disabled: true },
      allergy: ['no'],
      allergyDetails: ['N/A'],
      notPreferFood: ['no'],
      notPreferFoodDetails: ['N/A'],
      remarks: [''],
    });
  }
  updateAllergyChoice(choice: string) {
    this.userForm.get('allergy')!.setValue(choice);
  }

  updateFoodChoice(choice: string) {
    this.userForm.get('notPreferFood')!.setValue(choice);
  }

  selectDay(day: string) {
    this.userForm.get('day')!.setValue(day);
    this.bookingLabel = day;
    this.nextStep();
  }
  
  selectTimeslot(timeSlot: string) {
    this.userForm.get('timeSlot')!.setValue(timeSlot);
    this.timeslotLabel = timeSlot;
    this.nextStep();
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


submitForm() {
  if (this.userForm.valid) {
    const formData = this.userForm.value;
    console.log(formData);
  }


}
}