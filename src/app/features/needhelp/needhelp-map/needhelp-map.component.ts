import { Component, OnInit } from '@angular/core';
import { foodBanks } from 'src/app/models/food-bank-data';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-needhelp-map',
  templateUrl: './needhelp-map.component.html',
  styleUrls: ['./needhelp-map.component.css'],
})
export class NeedhelpMapComponent {}
