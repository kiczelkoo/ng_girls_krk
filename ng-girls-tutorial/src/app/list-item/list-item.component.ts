import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../interfaces/list-item';

@Component({
  selector: 'app-list-item',
  template: `
  <div  class="todo-item">
     {{ item.title }}
  </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: ListItem;

  constructor() { }

  ngOnInit() {
  }

}
