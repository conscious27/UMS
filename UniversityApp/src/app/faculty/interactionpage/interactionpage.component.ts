import { Component } from '@angular/core';

@Component({
  selector: 'app-interactionpage',
  templateUrl: './interactionpage.component.html',
  styleUrls: ['./interactionpage.component.css']
})
export class InteractionpageComponent {

  studentId: string = '';
  studentName: string = '';
  course: string = '';
  department: string = '';
  semester: string = '';

  chatOpen: boolean = false;
  messages: { text: string; fromFaculty: boolean }[] = [];
  newMessage: string = '';

  startChat() {
    this.chatOpen = true;
    this.messages = [];
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, fromFaculty: true });
      this.newMessage = '';
    }
  }

  endChat() {
    this.chatOpen = false;
    this.messages = [];
    this.newMessage = '';
  }

}
