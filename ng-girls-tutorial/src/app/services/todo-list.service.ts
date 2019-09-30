import { Injectable } from '@angular/core';
import { ListItem } from '../interfaces/list-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: ListItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: ListItem) { 
    this.todoList.push(item);
  }

}
