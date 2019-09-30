import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../interfaces/list-item';

@Component({
  selector: 'app-list-item',
  template: `
  <div  class="todo-item">
     {{ item.title }}

     <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
  </div>
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: ListItem;
  @Output() remove: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}
