import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  normal = `fa-solid fa-bars`;
  hover = 'fa-solid fa-bars fa-beat icon-hover';
  menuButton: string = this.normal;
}
