import { Component, DestroyRef, DoCheck, Inject, OnInit, inject } from '@angular/core'
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PostalCodeService } from '../postal-code/postal-code.service'

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
  postalCodeService = inject(PostalCodeService)
  destroyRef = inject(DestroyRef)

  constructor() {
    this.search = new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
    })
  }

  ngOnInit(): void {
    // declarative + imperative approach
    // this.search.valueChanges
    //   .pipe(
    //     takeUntilDestroyed(this.destroyRef),
    //     filter(() => this.search.valid),
    //     debounceTime(1000)
    //   )
    //   .subscribe((searchValue: string) => {
    //     const [city, country] = searchValue.split(',').map((s) => s.trim())
    //     //https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
    //     this.weatherService.updateCurrentWeather(city, country ?? undefined)
    //   })

    // declarative approach with empty .subscribe()
    this.search.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(() => this.search.valid),
        debounceTime(1000),
        tap((searchValue: string) => this.doSearch(searchValue))
      )
      .subscribe()
  }

  private doSearch(searchValue: string) {
    const [city, country] = searchValue.split(',').map((s) => s.trim())

    //https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or
    this.weatherService.updateCurrentWeather(city, country ?? undefined)
  }

  getErrorMessages(): string {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : ''
  }

  onFormSubmit() {
    console.log(this.search)
  }
}
