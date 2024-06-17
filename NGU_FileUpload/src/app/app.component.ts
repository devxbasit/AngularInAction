import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';
import { StudentService } from './services/student.service';

interface StudentRegistrationForm {
  name: FormControl<string>;
  age: FormControl<string>;
  image: FormControl<File | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // https://blog.angular-university.io/angular-file-upload/
  // https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
  // https://medium.com/weekly-webtips/handling-file-uploads-in-angular-reactive-approach-7f90453f57cb

  studentForm: FormGroup<StudentRegistrationForm>;
  studentService = inject(StudentService);
  uploadedFile!: File;

  constructor(private fb: FormBuilder) {
    this.studentForm = fb.group({
      name: fb.nonNullable.control('', [Validators.required]),
      age: fb.nonNullable.control('', [Validators.required]),
      image: fb.control<File | null>(null, [Validators.required]),
    });
  }

  onStudentFormSubmit() {
    const formData: any = new FormData();
    formData.append('name', this.studentForm.value.name);
    formData.append('age', this.studentForm.value.age);
    formData.append('image', this.uploadedFile);

    this.studentService
      .AddStudent(formData)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
  }

  onStudentFormReset() {
    this.studentForm.reset();
  }

  onStudentFormFileChange(event: Event) {
    const element = event.target as HTMLInputElement;
    const fileList: FileList | null = element.files;

    if (fileList && fileList.length >= 1) {
      this.uploadedFile = fileList[0];
    }
  }
}
