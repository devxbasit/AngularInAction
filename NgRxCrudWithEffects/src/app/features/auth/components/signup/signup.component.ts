import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import { signupStartAction } from '../../store/auth.actions';

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
  store = inject(Store<IAppState>);

  constructor() {
    this.signUpForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSignUp() {
    this.store.dispatch(
      signupStartAction({
        email: this.signUpForm.getRawValue().email,
        password: this.signUpForm.getRawValue().password,
      })
    );
  }
}
