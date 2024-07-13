import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeChannelNameAction } from '../state/counter.actions';
import { ICounterState } from '../state/counter.state';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {
  store = inject(Store<{ counterKey: ICounterState }>);

  channelName = '';
  ngOnInit(): void {
    this.store.select('counterKey').subscribe((state: ICounterState) => {
      console.log(`Channel component: channel name = ${state.channelName}`);
      this.channelName = state.channelName;
    });
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelNameAction());
  }
}
