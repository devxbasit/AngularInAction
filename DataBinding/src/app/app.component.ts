import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Data Binding In Action';
  name: string = 'Basit';
  counter: number = 0;
  darkMode: boolean = true;
  onSale: boolean = true;

  classConfig: any = {
    "on-sale": true,
    "light-mode": false,
    "dark-mode": true,
    "border-on": true
  }

  incrementCounter() {
    this.counter++;
  }
}
