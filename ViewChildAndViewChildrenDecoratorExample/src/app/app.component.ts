import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  // see also - ContentChild() & ContentChildren()

  title = 'ViewChildAndViewChildrenDecoratorExample';

  @ViewChild('searchBox') searchBox: ElementRef;
  @ViewChildren('searchBox') searchBoxes: QueryList<ElementRef>;

  @ViewChild(CounterComponent) counter: CounterComponent;
  @ViewChildren(CounterComponent) counters: QueryList<CounterComponent>;

  @ViewChild('projectedElement') projectedElement: ElementRef;

  ngAfterViewInit(): void {
    this.searchBox.nativeElement.value = 'hello';

    this.searchBoxes.forEach((el) => {
      el.nativeElement.style.border = '2px solid red';
      el.nativeElement.value += ' #World#';
    });

    console.log('project element -> ');
    console.log(this.projectedElement);
  }

  inc() {
    //this.counter.increment();

    this.counters.forEach((element) => {
      element.increment();
    });
  }

  dec() {
    //this.counter.decrement();

    this.counters.forEach((element) => {
      element.decrement();
    });
  }
}
