import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  template: `
  <input type="text" [formControl]="firstName" required>
  `,
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName = new FormControl('');

}
