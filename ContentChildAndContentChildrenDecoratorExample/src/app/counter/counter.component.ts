import { QueryList } from '@angular/core';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';
import { ClockComponent } from '../clock/clock.component';
import { ContentChildren } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements AfterViewInit {
  @ContentChild('para') paraEl: ElementRef;
  @ContentChildren('para') paraElList: QueryList<ElementRef>;

  @ContentChild(ClockComponent) clock: ClockComponent;
  @ContentChildren(ClockComponent) clocks: QueryList<ClockComponent>;

  @ContentChild('heading') headingEl: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.headingEl);

    console.log(this.paraEl.nativeElement);

    this.paraElList.forEach((el) => {
      console.log(el.nativeElement);
    });

    console.log(this.clock.time);

    this.clocks.forEach((el) => {
      console.log(el.time);
    });
  }
}
