import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from '../state/counter.state';
import {
  customIncrementAction,
  decrementAction,
  incrementAction,
  resetAction,
} from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  store = inject(Store<{ counterKey: ICounterState }>);

  ngOnInit(): void {}

  onInc() {
    this.store.dispatch(incrementAction());
  }
  onDec() {
    this.store.dispatch(decrementAction());
  }

  onReset() {
    this.store.dispatch(resetAction());
  }

  onRandomInc() {
    this.store.dispatch(customIncrementAction({ num: Math.random() }));
  }
}
