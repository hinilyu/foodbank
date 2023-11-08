import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  showPopup = false;

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }
}
