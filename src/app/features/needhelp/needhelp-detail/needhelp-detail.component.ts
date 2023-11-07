import { Component } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { foodBanks } from 'src/app/models/food-bank-data';

@Component({
  selector: 'app-needhelp-detail',
  templateUrl: './needhelp-detail.component.html',
  styleUrls: ['./needhelp-detail.component.css']
})
export class NeedhelpDetailComponent {
  allFoodBanks: Location[] = foodBanks;
  bankIndex: number = 1; 

  get currentBank(): Location {
    return this.allFoodBanks[this.bankIndex];
  }
}
