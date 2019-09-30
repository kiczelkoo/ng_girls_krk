import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../interfaces/list-item';

@Component({
  selector: 'app-list-item',
  template: `
  <div class="todo-item">
      <input type="checkbox"
             class="todo-checkbox"
             (click)="completeItem()"/>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>

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
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
}
