import { Component, OnInit } from '@angular/core';
import { foodBanks } from 'src/app/models/food-bank-data';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-needhelp-map',
  templateUrl: './needhelp-map.component.html',
  styleUrls: ['./needhelp-map.component.css']
})

export class NeedhelpMapComponent implements OnInit {
  map: any;

  ngOnInit() {
    this.initializeMap();
  }

  constructor(private router: Router) {}

  private initializeMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 43.7772276, lng: -79.2535623 },
      zoom: 12
    });

    foodBanks.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: this.map,
        title: location.title
      });

      marker.addListener('click', () => {
        // Navigate to the detail view when a marker is clicked
        this.router.navigate(['/location', location.title]);
      });
    });
  }
}
