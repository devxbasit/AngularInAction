import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getCounterReducer } from './features/counter/state/counter.reducer';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counterKey: getCounterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
