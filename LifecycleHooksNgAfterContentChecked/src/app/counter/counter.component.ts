import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent
  implements DoCheck, AfterContentInit, AfterContentChecked
{
  @ContentChild('para') paraEl: ElementRef;

  ngDoCheck(): void {
    console.log(
      'ngDoCheck Hook is called - will be called for every change detection cycle'
    );
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Hook is Called', this.paraEl.nativeElement);
  }

  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked Hook is called - will be called for every change detection cycle',
      this.paraEl.nativeElement
    );
  }
}
