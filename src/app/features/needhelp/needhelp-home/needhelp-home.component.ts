import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { foodBanks } from 'src/app/models/food-bank-data';
import { Location } from 'src/app/models/location.model'; // Update the path as per your project structure

declare var google: any;

@Component({
  selector: 'app-needhelp-home',
  templateUrl: './needhelp-home.component.html',
  styleUrls: ['./needhelp-home.component.css'],
})
export class NeedhelpHomeComponent implements OnInit {
  map: any;
  selectView: string = 'map';

  locations: Location[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeMap();
    // Assign the data to the locations array
    this.locations = foodBanks;
  }

  navigateToMapPage() {
    // Navigate to the map page
    this.router.navigate(['/map']);
  }

  navigateToListPage() {
    // Navigate to the list page
    this.router.navigate(['/list']);
  }

  private initializeMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 43.7772276, lng: -79.2535623 },
      zoom: 12,
    });

    const infoWindow = new google.maps.InfoWindow(); // Create an info window

    foodBanks.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map,
        title: location.title,
      });

      marker.addListener('click', () => {
        // Navigate to the detail view when a marker is clicked
        this.router.navigate(['/location', location.title]);
      });

      marker.addListener('mouseover', () => {
        // Show a pop-up window with additional information on mouseover
        infoWindow.setContent(
          `<div><img src="${location.imagelink}" width="150px" height="100px"><br>${location.title}</div>`
        );
        infoWindow.open(this.map, marker);
      });

      marker.addListener('mouseout', () => {
        // Close the pop-up window on mouseout
        infoWindow.close();
      });
    });
  }
}
