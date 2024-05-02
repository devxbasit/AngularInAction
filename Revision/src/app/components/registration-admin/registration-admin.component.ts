import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-admin.component.html',
  styleUrl: './registration-admin.component.scss'
})
export class RegistrationAdminComponent implements OnInit {

  formBuilder: FormBuilder = inject(FormBuilder);
  adminRegistrationForm: FormGroup;

  ngOnInit(): void {


    this.adminRegistrationForm = this.formBuilder.group(
      {
        username: this.formBuilder.control("initial value", [Validators.required]),
        dob: this.formBuilder.control(null,),
        address: this.formBuilder.group(
          {
            city: this.formBuilder.control(null),
            street: this.formBuilder.control(null)
          }),
        skills: this.formBuilder.array(
          [
            this.formBuilder.control("Java")
          ])


      });


  }


  registerAdmin() {

    console.clear();
    console.log(this.adminRegistrationForm.value)
    console.log(this.adminRegistrationForm);

  }


  patch() {

    this.adminRegistrationForm.patchValue(
      {
        username: "patch username",
        address: {
          city: "srinagar"
        }
      });

  }

  generateUsername() {

    this.adminRegistrationForm.controls['username'].setValue("random user name");

  }

  reset() {
    this.adminRegistrationForm.reset();
  }



  addNewSkill() {

    const formArray = <FormArray>this.adminRegistrationForm.get('skills');
    formArray.push(this.formBuilder.control(null, []));
  }

  deleteSkill(index) {

    const skillsArray = <FormArray>this.adminRegistrationForm.get('skills');

    skillsArray.removeAt(index);

  }

}
