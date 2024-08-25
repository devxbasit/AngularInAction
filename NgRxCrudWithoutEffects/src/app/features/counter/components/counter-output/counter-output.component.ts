import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import {
  counterCurrentCounterSelector,
  counterStatusSelector,
} from '../../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  currentCounter = 0;
  status = '';

  appStore = inject(Store<IAppState>);

  ngOnInit(): void {
    this.appStore.select(counterCurrentCounterSelector).subscribe((value) => {
      this.currentCounter = value;
    });

    this.appStore.select(counterStatusSelector).subscribe((value) => {
      this.status = value;
    });
  }
}
