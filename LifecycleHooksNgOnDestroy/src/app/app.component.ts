import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'LifecycleHooksNgOnDestroy';

  constructor() {
    console.log('-------------------------- app - constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-------------------------- app - OnChanges Hook Called');
  }

  ngOnInit(): void {
    console.log('-------------------------- app - OnInit Hook Called');
  }

  ngDoCheck(): void {
    console.log('-------------------------- app - DoCheck Hook Called');
  }

  ngAfterContentInit(): void {
    console.log(
      '-------------------------- app - AfterContentInit Hook Called'
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      '-------------------------- app - AfterContentChecked Hook Called'
    );
  }

  ngAfterViewInit(): void {
    console.log('-------------------------- app - AfterViewInit Hook Called');
  }

  ngAfterViewChecked(): void {
    console.log(
      '-------------------------- app - AfterViewChecked Hook Called'
    );
  }

  ngOnDestroy(): void {
    console.log('-------------------------- app - OnDestroy Hook Called');
  }

  isDestroy: boolean = false;

  destroyCounter() {
    this.isDestroy = !this.isDestroy;
  }
}
