import { Component } from '@angular/core';

var counter = 0;

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  constructor() {
    counter++;
    this.count = counter;
  }

  count = 0;
}
