import { Component, OnInit } from '@angular/core';
import { Message, ChatService } from '../../service/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  openChatbot = false;
  messages: Message[] = [];
  value!: string;
  constructor(public chatService: ChatService) {}
  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

  openDialog(): void {
    if (!this.openChatbot) this.openChatbot = true;
    else this.openChatbot = false;
  }
}
