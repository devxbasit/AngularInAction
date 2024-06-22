import { CommonModule, DatePipe, DecimalPipe } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe, DecimalPipe, CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather = {} as ICurrentWeather
  weatherService = inject(WeatherService)
  current$ = this.weatherService.currentWeather$

  ngOnInit(): void {
    this.current$.subscribe({
      next: (weather) => {
        this.current = weather
      },
    })
  }

  // Attribution: https://stackoverflow.com/a/44418732/178620
  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : ''
  }
}
