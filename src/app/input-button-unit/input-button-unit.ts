import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  imports: [],
  standalone: true,
  template:  `{{title}}
  <input class="todo-input" #inputElementRef 
         [value]="title"
         (keyup.enter)="submitValue(getInputValue($event))">

  <button class="btn" (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,  
  styleUrl: './input-button-unit.scss',
})
export class InputButtonUnit {
  title = 'Hello World'; 
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }   

  getInputValue(event: Event) {  
    return (event.target as HTMLInputElement).value;
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}

