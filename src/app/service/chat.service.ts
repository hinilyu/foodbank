import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class Message {
  constructor(public author: string, public content: string) {}
}
@Injectable()
export class ChatService {
  constructor() {}
  conversation = new Subject<Message[]>();
  messageMap: { [key: string]: string } = {
    "Hi": "Hello there! How can I assist you today?",
    "What is a food bank": "A food bank is a nonprofit organization that collects, stores, and distributes food to those in need. We help provide food assistance to individuals and families facing food insecurity.",
    "How can I donate food": "Donating food is a wonderful way to support our cause. You can drop off non-perishable food items at our nearest food bank location. We appreciate your generosity!",
    "How can I get food assistance": "If you or someone you know needs food assistance, please contact us at +1-987-654-3210 or visit our website to learn about eligibility and distribution schedules.",
    "Where are you located": "Our food bank is located at 941 Progress Avenue. You can also find our other distribution locations by visiting our website or contacting us for more information.",
    "What are your operating hours": "Our operating hours vary by location. Please visit our website or contact us for details on the operating hours of our distribution centers.",
    "defaultmsg": "I'm sorry, I didn't quite catch that. Feel free to ask any questions related to food banks, donations, or food assistance, and I'll be happy to help."
  }  
  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }
  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }
}