import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges, OnInit, DoCheck {
  title = 'LifecycleHooksNgDoCheck';
  fruits: string[] = [];

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes called');
  }

  ngOnInit() {
    console.log('init called');
  }

  ngDoCheck(): void {
    console.log(
      'doCheck called - will be called everytime change detection cycle runs'
    );
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }
}
