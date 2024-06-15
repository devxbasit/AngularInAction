import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { City } from '../interface/city';
import { Weather } from '../interface/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #httpClient: HttpClient = inject(HttpClient);
  city: City;
  weather: Weather;

  getCityDetails(cityName): Observable<City> {
    return this.#httpClient.get<City>(
      `https://api.api-ninjas.com/v1/city?name=${cityName}`,
      { headers: { 'X-Api-Key': 'xTfFhuDSwl8swLYE/yowJA==1bmDVbx5yOWfdKc5' } }
    );
  }
}
