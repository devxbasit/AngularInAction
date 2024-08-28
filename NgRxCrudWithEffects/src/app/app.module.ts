import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.reducer';
import { CounterModule } from './features/counter/counter.module';
import { PostModule } from './features/post/post.module';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './Layout/header/header.component';
import { AuthModule } from './features/auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoadingSpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    CounterModule, // feature module eager loading
    PostModule,
    AuthModule,
    EffectsModule.forRoot([]),
    ToastrModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
