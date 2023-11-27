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
  title = 'piPes dEmo In anGuLaR';
  totalAmount = 24000;

  createdDateTime = new Date();
  rate = 31.14;
  blendingPercentage = 44.5;

  student = {
    name: 'student 1',
    age: 10,
    address: 'Kashmir',
  };

  fruits = ['Apple', 'Mango', 'grapes', 'PineApple'];
}
