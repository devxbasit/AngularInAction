import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [SignupComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports: [AuthRoutingModule, HttpClientModule],
})
export class AuthModule {}
