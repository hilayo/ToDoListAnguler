import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemI } from '../interfaces/todo-item';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  standalone: true,
  template: `<div class="todo-item">
  <input type="checkbox" (click)="completeItem()" [checked]="item.completed"/>
  <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
   </span> </div>
   <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
`,
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() item! :TodoItemI;
  @Output() remove: EventEmitter<TodoItemI> = new EventEmitter<TodoItemI>();
  @Output() update : EventEmitter<any> = new EventEmitter<any>();
  removeItem(){
    this.remove.emit(this.item);
  }
  completeItem(){
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }
}
