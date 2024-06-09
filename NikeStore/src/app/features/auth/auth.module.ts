import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [],
  exports: [AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
