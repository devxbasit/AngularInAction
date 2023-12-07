import { Component } from '@angular/core';
import { count } from 'console';

var componentCount = 0;

@Component({
  selector: 'app-floating-button',
  standalone: true,
  imports: [],
  templateUrl: './floating-button.component.html',
  styleUrl: './floating-button.component.scss',
})
export class FloatingButtonComponent {
  counter: number = 0;

  constructor() {
    componentCount++;
    this.counter = componentCount;
  }
}
