import { DoCheck } from '@angular/core';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements DoCheck, AfterContentInit {
  @ContentChild('para') paraEl: ElementRef;

  ngDoCheck(): void {
    console.log('ngDoCheck Hook Called');

    console.log(this.paraEl);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Hook Called');
    console.log(this.paraEl.nativeElement);
  }
}
