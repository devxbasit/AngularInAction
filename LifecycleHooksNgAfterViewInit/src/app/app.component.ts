import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
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
export class AppComponent implements AfterContentChecked, AfterViewInit {
  title = 'LifecycleHooksNgAfterViewInit';
  @ViewChild('para') paraEl: ElementRef;

  ngAfterContentChecked(): void {
    console.log(
      'app component - AfterContentChecked Hook is called',
      this.paraEl
    );
  }

  ngAfterViewInit(): void {
    console.log('app component - AfterViewInit Hook is called', this.paraEl);
  }
}
