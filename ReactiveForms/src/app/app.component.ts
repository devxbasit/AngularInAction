import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './services/country.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Country } from './interfaces/country';
import { CustomValidator } from './validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  countries: Country[] = [];
  addUserReactiveForm: FormGroup;
  formStatus: string = '';
  formData: any = {};

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.bindCountry();
    this.addUserReactiveForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [
        Validators.required,
        Validators.minLength(5),
        CustomValidator.noSpaceAllowed,
      ]),
      lastName: this.formBuilder.control(null, [
        Validators.required,
        CustomValidator.noSpaceAllowed,
      ]),
      email: this.formBuilder.control(null, [Validators.required]),
      username: this.formBuilder.control(null, [
        Validators.required,
        CustomValidator.checkUserName,
      ]),
      dob: this.formBuilder.control(null, [Validators.required]),

      gender: this.formBuilder.control(null, [Validators.required]),

      address: this.formBuilder.group({
        street: this.formBuilder.control(null, [Validators.required]),
        country: this.formBuilder.control(null, [Validators.required]),
        city: this.formBuilder.control(null, [Validators.required]),
        region: this.formBuilder.control(null, [Validators.required]),
        postalCode: this.formBuilder.control(null, [Validators.required]),
      }),

      skills: this.formBuilder.array([
        this.formBuilder.control('Problem Solving', [Validators.required]),
      ]),
      experience: this.formBuilder.array([]),
    });

    // this.addUserReactiveForm
    //   .get('firstName')
    //   .statusChanges.subscribe((status) => {
    //     console.log(`firstName status changes ${status}`);
    //   });

    // this.addUserReactiveForm
    //   .get('firstName')
    //   .valueChanges.subscribe((value) => {
    //     console.log(`firstName value changes ${value}`);
    //   });

    this.addUserReactiveForm.statusChanges.subscribe((status) => {
      console.log(`reactive form status changes ${status}`);

      this.formStatus = status;
    });
  }

  submitUser() {
    console.log(this.addUserReactiveForm.status);
    console.log(this.addUserReactiveForm.value);

    this.formData = this.addUserReactiveForm.value;
    this.resetUserForm();
  }

  generateUserName() {
    const firstName = this.addUserReactiveForm.get('firstName').value;
    const lastName = this.addUserReactiveForm.get('lastName').value;
    const dob = new Date(this.addUserReactiveForm.get('dob').value);

    const username =
      `${firstName}@${lastName}@${dob.getUTCFullYear()}`.toLowerCase();

    //this.addUserReactiveForm.get('username').setValue(username);

    this.addUserReactiveForm.patchValue({
      username: username,
      address: {
        city: 'srinagar',
      },
    });
  }
  resetUserForm() {
    this.addUserReactiveForm.reset({
      firstName: null,
      lastName: null,
      email: null,
      username: null,
      dob: null,

      gender: null,

      address: {
        street: null,
        country: null,
        city: null,
        region: null,
        postalCode: null,
      },

      skills: [null],
      experience: [null],
    });
  }

  addNewSkill() {
    (<FormArray>this.addUserReactiveForm.get('skills')).push(
      this.formBuilder.control(null, [Validators.required])
    );
  }

  addExperience() {
    (<FormArray>this.addUserReactiveForm.get('experience')).push(
      this.formBuilder.group({
        companyName: this.formBuilder.control(null, [Validators.required]),
        position: this.formBuilder.control(null, [Validators.required]),
        yoe: this.formBuilder.control(null, [Validators.required]),
        startDate: this.formBuilder.control(null, [Validators.required]),
        endDate: this.formBuilder.control(null, [Validators.required]),
      })
    );

    console.log(this.addUserReactiveForm);
  }

  deleteSkill(i: number) {
    const skillsArray: FormArray = <FormArray>(
      this.addUserReactiveForm.get('skills')
    );

    if (skillsArray.length > 1) {
      skillsArray.removeAt(i);
    } else {
      alert('one skill is required');
    }
  }

  deleteExperience(index: number) {
    (<FormArray>this.addUserReactiveForm.get('experience')).removeAt(index);
  }

  bindCountry() {
    this.countryService.getCountry().subscribe({
      next: (response) => {
        this.countries = response.data;
        console.log(this.countries);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('request completed');
        console.log(this.countries);
      },
    });
  }
}
