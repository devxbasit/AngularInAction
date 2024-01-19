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
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent
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
  constructor() {
    console.log('************************** counter - constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('************************** counter - OnChanges Hook Called');
  }

  ngOnInit(): void {
    console.log('************************** counter - OnInit Hook Called');
  }

  ngDoCheck(): void {
    console.log('************************** counter - DoCheck Hook Called');
  }

  ngAfterContentInit(): void {
    console.log(
      '************************** counter - AfterContentInit Hook Called'
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      '************************** counter - AfterContentChecked Hook Called'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      '************************** counter - AfterViewInit Hook Called'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      '************************** counter - AfterViewChecked Hook Called'
    );
  }

  ngOnDestroy(): void {
    console.log('************************** counter - OnDestroy Hook Called');
  }
}
