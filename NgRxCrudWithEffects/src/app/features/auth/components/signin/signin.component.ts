import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

interface ISignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  fb = inject(NonNullableFormBuilder);
  signInForm: FormGroup<ISignInForm>;

  authService = inject(AuthService);

  constructor() {
    this.signInForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  onSignIn() {
    console.log(this.signInForm.value);
    console.log(this.signInForm.getRawValue());
  }
}
