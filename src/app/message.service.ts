import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string[] = [];
  constructor() { }

  addMessage(message: string): void{
    this.message.push(message);
  }

  clearMessage(): void{
    this.message = [];
  }
}
