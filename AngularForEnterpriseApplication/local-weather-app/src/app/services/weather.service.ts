import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, first, map, switchMap } from 'rxjs';
import { ICurrentWeather } from '../interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostalCodeService, defaultPostalCode } from './postal-code.service';
import { environment } from '../environments/environment';

export interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    },
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

export const defaultWeather: ICurrentWeather = {
  city: '--',
  country: '--',
  date: Date.now(),
  image: '',
  temperature: 0,
  description: '',
}

export interface IWeatherService {
  readonly currentWeather$: BehaviorSubject<ICurrentWeather>

  getCurrentWeather(city: string, country?: string): Observable<ICurrentWeather>
  getCurrentWeatherByCoords(coords: GeolocationCoordinates): Observable<ICurrentWeather>
  updateCurrentWeather(searchText: string, country?: string): void
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>(defaultWeather);

  private httpClient: HttpClient = inject(HttpClient);
  private postalCodeService: PostalCodeService = inject(PostalCodeService);

  updateCurrentWeather(searchText: string, country?: string | undefined): void {

    this.getCurrentWeather(searchText, country).pipe(
      first(),
    ).subscribe((weather) => this.currentWeather$.next(weather))
  }


  getCurrentWeather(searchText: string, country?: string): Observable<ICurrentWeather> {
    return this.postalCodeService.resolvePostalCode(searchText).pipe(
      switchMap((postalCode) => {
        if (postalCode && postalCode !== defaultPostalCode) {
          return this.getCurrentWeatherByCoords({
            latitude: postalCode.lat,
            longitude: postalCode.lng,
          })
        } else {
          const uriParams = new HttpParams().set(
            'q',
            country ? `${searchText},${country}` : searchText
          )

          return this.getCurrentWeatherHelper(uriParams)
        }
      })
    )
  }

  getCurrentWeatherByCoords(coords: {
    latitude: number,
    longitude: number
  }): Observable<ICurrentWeather> {

    const uriParams = new HttpParams()
      .set('lat', coords.latitude.toString())
      .set('lon', coords.latitude.toString());

    return this.getCurrentWeatherHelper(uriParams);
  }

  private getCurrentWeatherHelper(uriParams: HttpParams): Observable<ICurrentWeather> {

    uriParams.set('appid', environment.appId);

    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,
        { params: uriParams }
      )
      .pipe(map((data: ICurrentWeatherData) => this.transformToICurrentWeather(data)))
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
