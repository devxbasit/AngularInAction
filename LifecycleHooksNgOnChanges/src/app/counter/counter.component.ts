import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnChanges {
  @Input() num: number = 0;

  constructor() {
    console.log('counter component constructor called');
    console.log(`num = ${this.num}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('counter component ngOnChanges Called');
    console.log(changes);
    console.log(`num = ${this.num}`);
  }
}
