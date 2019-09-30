import { Component } from '@angular/core';
import { ListItem } from './interfaces/list-item';

@Component({
  selector: 'app-root',
  template: `<h1>
            Welcome to {{ title }}!
            </h1>
            
            <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
            <ul>
              <li *ngFor="let todoItem of todoList">
                <app-list-item [item]="todoItem"></app-list-item>
              </li>
            </ul>`,
            
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-girls-tutorial';
  todoList: ListItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
