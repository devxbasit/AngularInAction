import { formatPercent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface IProductForm {
  productName: FormControl<string>;
  quantity: FormControl;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NGU_CustomFormControl';
  productForm: FormGroup<IProductForm>;
  isCustomControlDisabled = false;

  ngOnInit(): void {
    this.productForm.valueChanges.subscribe({
      next: (data) => {
        console.log('form value changes', data);
      },
    });
  }
  constructor(fb: FormBuilder) {
    this.productForm = fb.nonNullable.group({
      productName: fb.nonNullable.control<string>('', [Validators.required]),
      quantity: fb.nonNullable.control(0, [Validators.required]),
    });
  }

  onProductFormSubmit() {
    console.log('form submitted', this.productForm.value);
  }

  onFormReset() {
    this.productForm.reset();
  }
  onFormPatch() {
    this.productForm.patchValue({
      productName: 'Test Product',
      quantity: 10,
    });
  }
}
