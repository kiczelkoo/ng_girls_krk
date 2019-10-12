import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <form>
  <div class="form-group">
  <input class="todo-input form-control" 
        #inputElementRef
        [value]="title"
        (keyup.enter)="submitValue($event.target.value)">
      </div>
  <button class="btn" (click)="submitValue(inputElementRef.value)">
  Save
  </button>
  </form>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submitItem: EventEmitter<string> = new EventEmitter();

  title = 'My first input button';
  constructor() {
  }

  ngOnInit() {

  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }

  submitValue(newTitle: string) {
    this.submitItem.emit(newTitle);
    console.log(newTitle);
    // this.title = newTitle;
    // console.log(this.title);
  }

}
