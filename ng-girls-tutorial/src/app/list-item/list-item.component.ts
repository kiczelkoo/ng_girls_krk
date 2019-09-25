import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
     {{ item.title }}
  `,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
