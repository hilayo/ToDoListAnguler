import { Injectable } from '@angular/core';
import { TodoItemI } from '../interfaces/todo-item';
import { StorageService } from './storage';


const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItemI[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
@Injectable({
  providedIn: 'root',
})

export class todoListService {
  constructor(private storageService: StorageService) { 
    this.todoList = 
    storageService.getData(todoListStorageKey) || defaultTodoList;
  }
  todoList: TodoItemI[] = [];
 

  getTodoList(): TodoItemI[] {
    return this.todoList;
  }
  addItem(item:TodoItemI){
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItemI, changes:any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList()
  }
  removeItem(toDoitem:TodoItemI){
    const index = this.todoList.indexOf(toDoitem);
    this.todoList.splice(index,1);
    this.saveList();
    
  }
  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}
}
