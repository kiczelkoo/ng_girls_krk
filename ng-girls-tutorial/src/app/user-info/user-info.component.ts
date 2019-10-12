import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  template: `
  <form [formGroup]="userFormGroup">
  
  <label>
    First Name:
    <input type="text" formControlName="firstName">
  </label>
  <label>
    Last Name:
    <input type="text" formControlName="lastName">
  </label>
  <label>
    Email:
    <input type="text" formControlName="email">
  </label>
  <label>
    Phone:
    <input type="text" formControlName="phone">
  </label>
  <label>
    Hobby:
    <input type="text" formControlName="hobby">
  </label>
  <label>
    Best Friend:
    <input type="text" formControlName="bestFriendName">
  </label>
  <label>
    Date of Birth:
    <input type="date" formControlName="dateOfBirth">
  </label>

</form>
  `,
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userFormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    hobby: new FormControl(''),
    bestFriendName: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

}
