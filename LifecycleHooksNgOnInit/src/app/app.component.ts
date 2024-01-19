import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'LifecycleHooksNgOnInit';
  nums: number[] = [1, 2, 3];
  @ViewChild('para') para: ElementRef;

  ngOnInit() {
    console.log(this.para.nativeElement);
  }

  addNum(input: HTMLInputElement): void {
    this.nums.push(parseInt(input.value));
  }
}
