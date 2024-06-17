import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

//FormArray accepts one generic argument, which is the type of the controls inside. If you need a heterogenous array, use UntypedFormArray.

interface StudentForm {
  name: FormControl<string>;
  subject: FormArray<FormControl<string>>;
}

interface TeacherForm {
  name: FormControl<string>;
  address: FormArray<FormGroup<Address>>;
}

interface Address {
  street: FormControl<string>;
  postalCode: FormControl<number>;
  state: FormControl<string>;
  isHomeAddress: FormControl<boolean>;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  studentForm: FormGroup<StudentForm>;
  teacherForm: FormGroup<TeacherForm>;

  constructor(private fb: FormBuilder) {
    this.studentForm = fb.nonNullable.group({
      name: fb.nonNullable.control('', [Validators.required]),
      subject: fb.nonNullable.array<string>([''], [Validators.required]),
    });

    const emptyAddressForm = this.getEmptyAddressFormGroup();

    this.teacherForm = fb.nonNullable.group({
      name: fb.nonNullable.control('', [Validators.required]),
      address: fb.nonNullable.array<FormGroup<Address>>([emptyAddressForm]),
    });
  }
  // student form

  onDeleteSubject(index: number) {
    if (this.studentForm.controls.subject.controls.length > 1) {
      this.studentForm.controls.subject.removeAt(index);
    }
  }

  onAddSubject() {
    const newControl = new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    });
    this.studentForm.controls.subject.push(newControl);
  }

  onStudentFormSubmit() {
    console.log('Student form submit', this.studentForm.value);
  }

  // teacher form
  onDeleteAddress(index: number) {
    if (this.teacherForm.controls.address.controls.length > 1) {
      this.teacherForm.controls.address.removeAt(index);
    }
  }

  onAddAddress() {
    const emptyAddressForm = this.getEmptyAddressFormGroup();
    this.teacherForm.controls.address.push(emptyAddressForm);
  }

  onTeacherFormSubmit() {
    console.log('Teacher form submit', this.teacherForm.value);
  }

  getEmptyAddressFormGroup() {
    return this.fb.nonNullable.group<Address>({
      street: this.fb.nonNullable.control('', [Validators.required]),
      postalCode: this.fb.nonNullable.control(0, [Validators.required]),
      state: this.fb.nonNullable.control('', [Validators.required]),
      isHomeAddress: this.fb.nonNullable.control(false, [Validators.required]),
    });
  }

  onStudentFormReset(){
    this.studentForm.reset()
  }

  onTeacherFormReset(){
    this.teacherForm.reset()
  }
}
