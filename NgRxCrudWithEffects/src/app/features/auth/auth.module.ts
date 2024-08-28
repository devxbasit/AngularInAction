import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthRoutingModule, HttpClientModule],
})
export class AuthModule {}
