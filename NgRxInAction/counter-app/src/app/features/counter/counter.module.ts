import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterRoutingModule } from './counter-routing.module';
import { ChannelComponent } from './channel/channel.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterTextComponent } from './counter-text/counter-text.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterTextComponent,
    ChannelComponent,
  ],
  imports: [CommonModule],
  exports: [CounterRoutingModule],
})
export class CounterModule {}
