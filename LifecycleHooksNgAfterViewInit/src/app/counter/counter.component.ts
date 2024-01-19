import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements AfterViewChecked {
  ngAfterViewChecked(): void {
    console.log(
      '*************************counter component - AfterViewChecked Hook is called'
    );
  }
}
