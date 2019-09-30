import { Component, OnInit } from '@angular/core';
import { ListItem } from '../interfaces/list-item';


@Component({
  selector: 'app-list-manager',
  template: `

  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let listItem of todoList">
      <app-list-item [item]="listItem"></app-list-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: ListItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}