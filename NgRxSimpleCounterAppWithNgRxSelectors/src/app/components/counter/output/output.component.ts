import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  counterChannelNameSelector,
  counterCurrentCounterSelector,
} from '../state/counter.selectors';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  counter: number = 0;
  channelName = '';

  store = inject(Store<{ counter: { currentCounter: number } }>);
  ngOnInit(): void {
    this.store.select(counterCurrentCounterSelector).subscribe((newValue) => {
      console.log('CounterInitialState Updated! new counter value', newValue);
      this.counter = newValue;
    });

    this.store
      .select(counterChannelNameSelector)
      .subscribe((newChannelName) => {
        console.log(
          'CounterInitialState Updated! new channel name',
          newChannelName
        );

        this.channelName = newChannelName;
      });
  }
}
