import { Component } from '@angular/core';
import { ListItem } from './interfaces/list-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,            
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-girls-tutorial';
}
