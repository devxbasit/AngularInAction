import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  customIncrementAction,
  decrementAction,
  incrementAction,
  resetAction,
} from '../state/counter.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  ngModel = {
    value: 2,
  };

  store = inject(Store<{ counter: { currentCounter: number } }>);

  inc() {
    this.store.dispatch(incrementAction());
  }

  dec() {
    this.store.dispatch(decrementAction());
  }

  reset() {
    this.store.dispatch(resetAction());
  }

  customIncrement() {
    this.store.dispatch(
      customIncrementAction({
        customIncrementValue: Number(this.ngModel.value),
      })
    );
  }
}
