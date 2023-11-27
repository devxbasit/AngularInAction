import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  username: string = '';
  isDisabled: boolean = true;
  className: string = 'text-danger';
  hasError: boolean = true;
  color: string = 'red';
  emailAddress: string = '';
  countryName: string = '';

  writeOnConsole(value: string) {
    console.log(value);
  }

  setUsername(username: string) {
    this.username = username;
  }

  sayHello(e: any) {
    alert(`Hello, e.target.id = ${e.target.id}`);
  }
  setEmailAddress(event: any) {
    this.emailAddress = event.target.value;
  }
  OnCountryChange(event: any) {
    this.countryName = event.target.value;
  }
}
