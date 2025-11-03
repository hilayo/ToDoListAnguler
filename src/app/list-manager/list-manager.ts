import { Component } from '@angular/core';
import { TodoItemI } from '../interfaces/todo-item';
import { InputButtonUnit } from '../input-button-unit/input-button-unit';
import { TodoItem } from '../todo-item/todo-item';
import { todoListService} from '../services/todo-list';

@Component({
  selector: 'app-list-manager',
  imports: [InputButtonUnit,TodoItem],
  template:`   <div class="todo-app"> <app-input-button-unit (submit)="addItem($event)" ></app-input-button-unit>
   <ul>
    @for( todoItem of todoList; track todoItem.title) {
      <li>
         <app-todo-item [item]=todoItem (remove)="removeItem($event)" (update)="updateItem($event.item, $event.changes)"></app-todo-item>
      </li>
    }
  </ul>
    </div>`,
  styleUrl: './list-manager.scss',
})
export class ListManager {
  todoList: TodoItemI[];
constructor(private todoListService:todoListService){
  this.todoList=this.todoListService.getTodoList();
  
}
addItem(title: string) {    
  this.todoListService.addItem({title});
}
removeItem(item:TodoItemI){
this.todoListService.removeItem(item);
}
updateItem(item:TodoItemI,changes:any){
  this.todoListService.updateItem(item,changes);
}

}
