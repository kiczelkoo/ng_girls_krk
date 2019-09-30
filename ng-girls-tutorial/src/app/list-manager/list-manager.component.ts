import { Component, OnInit } from '@angular/core';
import { ListItem } from '../interfaces/list-item';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-manager',
  template: `

  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let listItem of todoList">
      <app-list-item [item]="listItem" (remove)="removeItem($event)"></app-list-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: ListItem[];

  constructor(private todoListService: TodoListService) {
    this.todoList = todoListService.getTodoList();
  }

  ngOnInit() {
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
}
}