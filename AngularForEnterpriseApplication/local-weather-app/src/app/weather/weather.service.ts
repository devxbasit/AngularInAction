import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, Observable, Subject, map } from 'rxjs'
import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../interfaces'

export interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

export interface IWeatherService {
  readonly currentWeather$: BehaviorSubject<ICurrentWeather>
  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather>
  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Observable<ICurrentWeather>
  updateCurrentWeather(search: string | number, country?: string): void
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  httpClient = inject(HttpClient)
  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>({
    city: '--',
    country: '--',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  })

  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather> {
    let uriParams = new HttpParams()

    if (typeof search === 'string') {
      uriParams = uriParams.set('q', country ? `${country},${search}` : search)
    } else {
      uriParams = uriParams.set('zip', search)
    }

    uriParams = uriParams.set('appid', environment.appId)

    return this.httpClient
      .get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather`, {
        params: uriParams,
      })
      .pipe<ICurrentWeather>(
        map((data: ICurrentWeatherData) => this.transformToICurrentWeather(data))
      )
  }

  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Observable<ICurrentWeather> {
    const uriParams = new HttpParams()
      .set('lat', coords.latitude.toString())
      .set('long', coords.longitude.toString())

    return this.getCurrentWeatherHelper(uriParams)
  }

  updateCurrentWeather(search: string | number, country?: string | undefined): void {
    this.getCurrentWeather(search, country).subscribe((weather) => {
      this.currentWeather$.next(weather)
    })
  }

  private getCurrentWeatherHelper(uriParams: HttpParams): Observable<ICurrentWeather> {
    uriParams = uriParams.set('appid', environment.appId)
    return this.httpClient
      .get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather`, {
        params: uriParams,
      })
      .pipe<ICurrentWeather>(
        map((data: ICurrentWeatherData) => this.transformToICurrentWeather(data))
      )
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}
