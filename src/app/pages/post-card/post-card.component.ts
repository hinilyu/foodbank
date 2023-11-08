import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  
})

export class PostCardComponent {
  message: string = '';

  constructor(private http: HttpClient) {}

  postMessage() {
    if (this.message.length <= 100) {
      this.http.post('YOUR_BACKEND_ENDPOINT', { message: this.message }).subscribe(
        response => {
          // Handle response here
          console.log(response);
        },
        error => {
          // Handle error here
          console.error(error);
        }
      );
    } else {
      // Handle error if message is more than 100 words
      alert('Message cannot exceed 100 words.');
    }
  }
}
