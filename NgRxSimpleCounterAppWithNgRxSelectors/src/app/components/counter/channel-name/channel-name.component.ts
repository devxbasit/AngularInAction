import { Store } from '@ngrx/store';
import { Component, inject } from '@angular/core';
import { ICounterInitialState } from '../state/counter.state';
import { changeChannelNameAction } from '../state/counter.actions';

@Component({
  selector: 'app-channel-name',
  templateUrl: './channel-name.component.html',
  styleUrls: ['./channel-name.component.css'],
})
export class ChannelNameComponent {
  ngModel = {
    value: 'my custom channel name',
  };

  store = inject(Store<{ counter: ICounterInitialState }>);

  changeChannelName() {
    this.store.dispatch(
      changeChannelNameAction({ newChannelName: this.ngModel.value })
    );
  }
}
