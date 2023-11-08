import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  normal = `fa-solid fa-bars`;
  hover = 'fa-solid fa-bars fa-beat icon-hover';
  menuButton: string = this.normal;
  isLoggedIn: boolean = localStorage.getItem('loggedIn') == 'true' || false;

  ngOnInit(): void {}

  logout() {
    localStorage.setItem('loggedIn', 'false');
    this.isLoggedIn = false;
  }
}
