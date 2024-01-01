import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TemplateDrivenForm';

  user: { name: string; email: string } = {
    name: '',
    email: '',
  };

  isValidEmail(): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(this.user.email);
  }

  addUser(addUserForm: NgForm) {
    debugger;
    if (!addUserForm.valid) return;

    console.log(addUserForm.value);
  }
}
