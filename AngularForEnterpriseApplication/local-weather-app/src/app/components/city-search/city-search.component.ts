import { CommonModule } from '@angular/common'
import { Component, DestroyRef, OnInit, inject } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { debounceTime, filter, tap } from 'rxjs/operators'
import { WeatherService } from '../../services/weather.service'

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.scss'
})
export class CitySearchComponent implements OnInit {

  private readonly weatherService = inject(WeatherService);
  search = new FormControl('', [Validators.required, Validators.minLength(2)])
  destroyedRef = inject(DestroyRef)

  ngOnInit(): void {

    this.search.valueChanges.pipe(
      filter(() => this.search.valid),
      debounceTime(1000),
      tap((searchValue) => this.doSearch(searchValue)),
      takeUntilDestroyed(this.destroyedRef)
    ).subscribe()
  }

  doSearch(searchValue: string | null) {

    if (searchValue === null) return;

    const userInput = searchValue.split(',').map(s => s.trim())
    const searchText = userInput[0];
    const country = userInput.length > 1 ? userInput[1] : undefined;

    this.weatherService.updateCurrentWeather(searchText, country);
  }

}
