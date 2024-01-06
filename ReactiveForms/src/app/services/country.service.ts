import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesNowResponse } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private ulr: string = 'https://countriesnow.space/api/v0.1/countries/iso';

  constructor(private http: HttpClient) {}

  getCountry(): Observable<CountriesNowResponse> {
    return this.http.get<CountriesNowResponse>(this.ulr);
  }
}
