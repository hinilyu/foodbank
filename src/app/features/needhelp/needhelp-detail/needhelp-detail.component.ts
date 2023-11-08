import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from 'src/app/models/location.model';
import { foodBanks } from 'src/app/models/food-bank-data';

@Component({
  selector: 'app-needhelp-detail',
  templateUrl: './needhelp-detail.component.html',
  styleUrls: ['./needhelp-detail.component.css'],
})
export class NeedhelpDetailComponent {
  allFoodBanks: Location[] = foodBanks;
  currentBank: Location  = this.allFoodBanks[0];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      const name = params['name']; // Assuming 'name' is the parameter you're using in the route
      this.currentBank =
        this.allFoodBanks.find((bank) => bank.title === name) || this.allFoodBanks[0];
    });
  }
}
