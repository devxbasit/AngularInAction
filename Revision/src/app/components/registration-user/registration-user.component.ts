import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-registration-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.scss'
})
export class RegistrationUserComponent {

  @ViewChild('userRegistrationForm') userRegistrationForm: NgForm


  registerUser() {

    console.clear();
    console.log(this.userRegistrationForm);
    console.log(this.userRegistrationForm.value);

  }

  setUserName() {

    this.userRegistrationForm.form.controls['username'].setValue("random user name");
  }

  patchForm() {

    // this.userRegistrationForm.form.setValue();

    this.userRegistrationForm.form.patchValue(
      {
        username: "patch username",
        address: {
          city: "srinagar",
          street: "street"
        }
      });
  }

  reset() {
    this.userRegistrationForm.form.reset();
  }

}
