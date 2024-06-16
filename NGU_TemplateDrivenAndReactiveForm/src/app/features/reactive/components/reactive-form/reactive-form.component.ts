import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';

interface UserForm {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup<UserForm>;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      name: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userForm.valueChanges.pipe().subscribe({
      next: (form) => {
        console.log('from value changes', form);
      },
    });

    this.userForm.controls.email.valueChanges.pipe().subscribe({
      next: (control) => {
        console.log('control value changes', control);
      },
    });
  }

  onSubmit() {
    console.log('form submit', this.userForm.value);
  }

  onFullUpdate() {
    this.userForm.setValue({ name: 'test name', email: 'test email' });
    console.log('form full update', this.userForm.value);
  }

  onPartialUpdate() {
    this.userForm.patchValue({ email: 'patched email' });
    console.log('form partial update', this.userForm.value);
  }

  onReset() {
    this.userForm.reset();
    console.log('form reset', this.userForm.value);
  }
}
