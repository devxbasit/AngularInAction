import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModule {}
