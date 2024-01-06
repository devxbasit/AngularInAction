import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './services/country.service';
import {
  FormArray,
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

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.bindCountry();
    this.addUserReactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        CustomValidator.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        CustomValidator.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [
        Validators.required,
        CustomValidator.checkUserName,
      ]),
      dob: new FormControl(null, [Validators.required]),

      gender: new FormControl(null, [Validators.required]),

      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        region: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
      }),

      skills: new FormArray([
        new FormControl('Problem Solving', [Validators.required]),
      ]),
      experience: new FormArray([]),
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
      new FormControl(null, [Validators.required])
    );
  }

  addExperience() {
    (<FormArray>this.addUserReactiveForm.get('experience')).push(
      new FormGroup({
        companyName: new FormControl(null, [Validators.required]),
        position: new FormControl(null, [Validators.required]),
        yoe: new FormControl(null, [Validators.required]),
        startDate: new FormControl(null, [Validators.required]),
        endDate: new FormControl(null, [Validators.required]),
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
