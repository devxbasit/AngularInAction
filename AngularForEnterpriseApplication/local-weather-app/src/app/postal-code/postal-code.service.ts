import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable, defaultIfEmpty, mergeMap } from 'rxjs'
import { environment } from '../../environments/environment'

export const defaultPostalCode: IPostalCode = {
  countryCode: '--',
  postalCode: '--',
  placeName: '--',
  lng: 0,
  lat: 0,
}

export interface IPostalCode {
  countryCode: string
  postalCode: string
  placeName: string
  lng: number
  lat: number
}
export interface IPostalCodeData {
  postalCodes: [IPostalCode]
}
export interface IPostalCodeService {
  resolvePostalCode(postalCode: string): Observable<IPostalCode>
}

@Injectable({
  providedIn: 'root',
})
export class PostalCodeService implements IPostalCodeService {
  httpClient = inject(HttpClient)
  resolvePostalCode(postalCode: string): Observable<IPostalCode> {
    const uriParams = new HttpParams()
      .set('maxRows', 1)
      .set('username', environment.username)
      .set('postalcode', postalCode)

    return this.httpClient
      .get<IPostalCodeData>(`http://${environment.geonamesApi}.geonames.org/postalCodeSearchJSON`, {
        params: uriParams,
      })
      .pipe(
        mergeMap((data) => data.postalCodes),
        defaultIfEmpty(defaultPostalCode)
      )
  }
}
