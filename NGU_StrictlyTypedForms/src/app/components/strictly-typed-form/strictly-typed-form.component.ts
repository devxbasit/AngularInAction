import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface UserRegistrationFrom {
  name: FormControl<string | null>;
  email: FormControl<string>;
}

interface AdminRegistrationFrom {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-strictly-typed-form',
  templateUrl: './strictly-typed-form.component.html',
  styleUrls: ['./strictly-typed-form.component.scss'],
})
export class StrictlyTypedFormComponent {
  userForm: FormGroup<UserRegistrationFrom>;
  adminForm: FormGroup<AdminRegistrationFrom>;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.nonNullable.control('', [Validators.required]),
    });

    this.adminForm = fb.nonNullable.group({
      name: fb.nonNullable.control('', [Validators.required]),
      email: fb.nonNullable.control('', [Validators.required]),
    });
  }

  onUserFormSubmit() {
    console.log(this.userForm.value);
  }

  onAdminFormSubmit() {
    console.log(this.adminForm.value);
  }

  onUserFormReset() {
    this.userForm.reset();
  }

  onAdminormReset() {
    this.adminForm.reset();
  }
}
