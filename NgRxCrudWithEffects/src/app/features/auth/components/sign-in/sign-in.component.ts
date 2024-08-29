import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.reducer';
import { signInStartAction } from '../../store/auth.actions';

interface ISignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  fb = inject(NonNullableFormBuilder);
  signInForm: FormGroup<ISignInForm>;
  store = inject(Store<IAppState>);

  constructor() {
    this.signInForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSignIn() {
    this.store.dispatch(
      signInStartAction({
        email: this.signInForm.getRawValue().email,
        password: this.signInForm.getRawValue().password,
      })
    );
  }
}
