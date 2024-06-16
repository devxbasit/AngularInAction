import { Component, ContentChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  @ContentChild('userForm1') userForm1!: NgForm;
  @ContentChild('userForm2') userForm2!: NgForm;
  @ContentChild('userForm3') userForm3!: NgForm;

  userModel1: User = { name: 'user1' };
  userModel2: User = { name: 'user2' };

  addUserTwoWayBinding() {
    console.log(this.userModel1);
  }
  addUserOneWayBinding(form: any) {
    console.log('model not updated even on submit', this.userModel2);
    console.log('passed form', form);
    console.log('passed value', form.value);
  }
  addUserNoBinding(form: any) {
    console.log('passed form', form);
    console.log('passed value', form.value);
  }

  viewModelDataTwoWayBinding() {
    console.log(this.userModel1);
  }
  viewModelDataOneWayBinding() {
    console.log(this.userModel2);
  }
}
