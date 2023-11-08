
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model'; // Update the path as per your project structure
import { foodBanks } from 'src/app/models/food-bank-data'; // Update the path as per your project structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-needhelp-list',
  templateUrl: './needhelp-list.component.html',
  styleUrls: ['./needhelp-list.component.css']
})
export class NeedhelpListComponent implements OnInit {

  constructor(private router: Router) {}

  navigateToMapPage() {
    // Navigate to the map page
    this.router.navigate(['/map']);
  }

  locations: Location[] = [];

  ngOnInit() {
    // Assign the data to the locations array
    this.locations = foodBanks;
  }
}

