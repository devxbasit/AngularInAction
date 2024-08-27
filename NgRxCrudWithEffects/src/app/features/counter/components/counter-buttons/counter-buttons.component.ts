import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import {
  customIncrementCounterAction,
  decrementCounterAction,
  incrementCounterAction,
  resetCounterAction,
} from '../../store/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  store = inject(Store<IAppState>);
  ngModel = { value: 10 };

  increment() {
    this.store.dispatch(incrementCounterAction());
  }
  decrement() {
    this.store.dispatch(decrementCounterAction());
  }
  reset() {
    this.store.dispatch(resetCounterAction());
  }

  customIncrement() {
    this.store.dispatch(
      customIncrementCounterAction({
        incrementByValue: Number(this.ngModel.value),
      })
    );
  }
}
