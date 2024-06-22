import { Component, Inject, OnInit, inject } from '@angular/core'
import {
  FormControl,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { WeatherService } from '../weather/weather.service'
import { debounceTime } from 'rxjs'

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss',
})
export class CitySearchComponent implements OnInit {
  search: FormControl<string>
  weatherService = inject(WeatherService)

  constructor() {
    this.search = new FormControl<string>('', {
      updateOn: 'submit',
      nonNullable: true,
      validators: [Validators.minLength(3)],
    })
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      const userInput = searchValue.split(',').map((s) => s.trim())
      this.weatherService
        .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
        .subscribe((data) => {
          if (this.search.valid) {
            console.log(data)
          }
        })
    })
  }

  getErrorMessages(): string {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : ''
  }

  onFormSubmit() {
    console.log(this.search)
  }
}
