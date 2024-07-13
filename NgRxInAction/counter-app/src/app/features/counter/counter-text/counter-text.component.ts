import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-text',
  templateUrl: './counter-text.component.html',
  styleUrls: ['./counter-text.component.scss'],
})
export class CounterTextComponent implements OnInit {
  counter = 0;
  store = inject(Store<{ counterKey: ICounterState }>);
  ngOnInit(): void {
    this.store.select('counterKey').subscribe((state: ICounterState) => {
      console.log(`CounterText component: counter = ${state.counter}`);
      this.counter = state.counter;
    });
  }
}
