import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnChanges, OnInit {
  @Input() nums: number[] = [];

  constructor() {
    console.log('counter - constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('counter - ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('counter - ngOnInit');
  }
}
