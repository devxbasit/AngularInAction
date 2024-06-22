import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BehaviorSubject, Observable, Subject, first, map, switchMap } from 'rxjs'
import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../interfaces'
import { PostalCodeService } from '../postal-code/postal-code.service'

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
  getCurrentWeather(search: string, country?: string): Observable<ICurrentWeather>
  updateCurrentWeather(search: string, country?: string): void
  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Observable<ICurrentWeather>
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements IWeatherService {
  #httpClient = inject(HttpClient)
  #postalCodeService = inject(PostalCodeService)

  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>({
    city: '--',
    country: '--',
    date: Date.now(),
    image: '',
    temperature: 0,
    description: '',
  })

  getCurrentWeather(search: string, country?: string): Observable<ICurrentWeather> {
    return this.#postalCodeService.resolvePostalCode(search).pipe(
      switchMap((postalCode) => {
        if (postalCode.lat) {
          return this.getCurrentWeatherByCoords({
            latitude: postalCode.lat,
            longitude: postalCode.lng,
          } as GeolocationCoordinates)
        } else {
          return this.getCurrentWeatherByQuery(search, country)
        }
      })
    )
  }

  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Observable<ICurrentWeather> {
    const uriParams = new HttpParams()
      .set('lat', coords.latitude.toString())
      .set('lon', coords.longitude.toString())
    return this.getCurrentWeatherHelper(uriParams)
  }

  getCurrentWeatherByQuery(search: string, country?: string): Observable<ICurrentWeather> {
    const uriParams = new HttpParams().set('q', country ? `${country},${search}` : search)

    return this.getCurrentWeatherHelper(uriParams)
  }

  updateCurrentWeather(search: string, country?: string | undefined): void {
    this.getCurrentWeather(search, country)
      .pipe(first())
      .subscribe((weather) => {
        this.currentWeather$.next(weather)
      })
  }

  private getCurrentWeatherHelper(uriParams: HttpParams): Observable<ICurrentWeather> {
    uriParams = uriParams.set('appid', environment.appId)
    return this.#httpClient
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
