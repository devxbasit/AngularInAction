import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

interface ISignUpForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  fb = inject(NonNullableFormBuilder);
  signUpForm: FormGroup<ISignUpForm>;
  authService = inject(AuthService);

  constructor() {
    this.signUpForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSignUp() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.getRawValue());
    this.authService
      .signup(
        this.signUpForm.getRawValue().email,
        this.signUpForm.getRawValue().password
      )
      .subscribe();
  }
}
