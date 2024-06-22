import { Component, DoCheck, Inject, OnInit, inject } from '@angular/core'
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
import { debounceTime, filter, tap } from 'rxjs'

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
      nonNullable: true,
      validators: [Validators.minLength(3)],
    })
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        filter(() => this.search.valid)
      )
      .subscribe((value: string) => {
        console.log(value)
        const [city, country] = value.split(',').map((s) => s.trim())

        //https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
        this.weatherService.updateCurrentWeather(city, country ?? undefined)
      })
  }

  getErrorMessages(): string {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : ''
  }

  onFormSubmit() {
    console.log(this.search)
  }
}
