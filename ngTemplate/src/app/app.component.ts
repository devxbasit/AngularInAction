import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FloatingButtonComponent } from './floating-button/floating-button.component';

var componentCount = 0;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FloatingButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  addedToCart: boolean = false;
  title = 'ngTemplate';
  isUserLoggedIn: boolean = true;
  books: string[] = ['C# in Depth', 'C# in Action'];
  gender = 'm';

  showFloatingButton: boolean = false;

  toggleFloatingButton() {
    this.showFloatingButton = !this.showFloatingButton;
  }
}
