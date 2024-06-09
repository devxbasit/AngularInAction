import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, defaultIfEmpty, mergeMap, tap } from 'rxjs';
import { environment } from '../environments/environment';

export interface IPostalCode {
  countryCode: string
  postalCode: string
  placeName: string
  lng: number
  lat: number
}

export const defaultPostalCode: IPostalCode = {
  countryCode: '--',
  postalCode: '--',
  placeName: '--',
  lng: 0,
  lat: 0,
}

export interface IPostalCodeData {
  postalCodes: [IPostalCode]
}

export interface IPostalCodeService {
  resolvePostalCode(postalCode: string): Observable<IPostalCode | null>
}

@Injectable({
  providedIn: 'root'
})
export class PostalCodeService implements IPostalCodeService {


  httpClient: HttpClient = inject(HttpClient);

  resolvePostalCode(postalCode: string): Observable<IPostalCode | null> {

    const uriParams = new HttpParams()
      .set('maxRows', '1')
      .set('username', environment.username)
      .set('postalcode', postalCode);

    return this.httpClient.get<IPostalCodeData>(
      `${environment.baseUrl}${environment.geonamesApi}.geonames.org/postalCodeSearchJSON`,
      { params: uriParams }
    )
      .pipe(
        tap(data => console.log('alsdkflkj ---------', data)),
        mergeMap((data) => data.postalCodes),
        tap(data => console.log('alsdkflkj ---------', data)),
        defaultIfEmpty(defaultPostalCode)
      );
  }
}
