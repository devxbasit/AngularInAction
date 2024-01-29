import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('userRegistrationForm') registrationForm: NgForm;
  genders = [
    { value: 'm', label: 'Male' },
    { value: 'f', label: 'Female' },
    { value: 'o', label: 'other' },
  ];

  generateUserName() {
    const username =
      this.registrationForm.value.firstName + this.registrationForm.value.email;

    //this.registrationForm.controls['username'].setValue(username);

    this.registrationForm.form.patchValue({ username: username });
  }
  addUser() {
    console.log(this.registrationForm);
  }
}
