import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveModule } from './features/reactive/reactive.module';
import { TemplateModule } from './features/template/template.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveModule,
    TemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
