import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LifecycleHooksNgAfterViewChecked';

  @ViewChild('para') paraEl: ElementRef;
  username: string = '';

  setName(name: string): void {
    this.username = name;
  }

  ngAfterViewInit(): void {
    console.log('app component - AfterViewInit Hook is called', this.paraEl);
  }

  ngAfterViewChecked(): void {
    console.log('app component - AfterViewChecked Hook is called', this.paraEl);
  }
}
