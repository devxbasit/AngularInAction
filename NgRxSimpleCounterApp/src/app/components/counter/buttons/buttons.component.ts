import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
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
}
