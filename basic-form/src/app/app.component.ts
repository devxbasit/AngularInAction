import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isFormSubmitted: boolean = false;
  person = {
    name: '',
    salary: '',
  };

  setPersonValue(event: any) {
    const key = event.target.name;
    const value = event.target.value;
    this.person[key as keyof typeof this.person] = value;
  }

  submitForm() {
    for (const [key, value] of Object.entries(this.person)) {
      if (value.trim().length === 0) {
        alert('All Fields are required');
        return;
      }
    }

    this.isFormSubmitted = true;
  }

  submitAnotherResponse() {
    this.person = {
      name: '',
      salary: '',
    };
    this.isFormSubmitted = false;
  }
}
