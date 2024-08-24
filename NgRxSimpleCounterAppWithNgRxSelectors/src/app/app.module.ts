import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/counter/dashboard/dashboard.component';
import { ButtonsComponent } from './components/counter/buttons/buttons.component';
import { OutputComponent } from './components/counter/output/output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './components/counter/state/counter.reducers';
import { FormsModule } from '@angular/forms';
import { ChannelNameComponent } from './components/counter/channel-name/channel-name.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonsComponent,
    OutputComponent,
    ChannelNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
