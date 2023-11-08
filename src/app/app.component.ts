import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-chatbot></app-chatbot>`
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodbank';
}
