import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, concatMap, map, mergeMap, switchMap } from 'rxjs';
import { Cat } from '../interface/cat';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  #httpClient: HttpClient = inject(HttpClient);
  #API_KEY: string = 'live_MNYCnk6k1wMN2STtbNN3vVuILhvCoVpFD4aK7ELWK7F27A32Mto7O0VP2P1p6a2j';
  cats$: Observable<Cat[]> = this.#httpClient.get<Cat[]>(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${this.#API_KEY}`);

  #catActionStream: Subject<string> = new Subject<string>();
  catActionStream$: Observable<string> = this.#catActionStream.asObservable();
  hoveredCat$: Observable<Cat> = this.catActionStream$.pipe(
    concatMap(catId => this.#httpClient.get<Cat>(`https://api.thecatapi.com/v1/images/${catId}?api_key${this.#API_KEY}`))
    // mergeMap(catId => this.#httpClient.get<Cat>(`https://api.thecatapi.com/v1/images/${catId}?api_key${this.#API_KEY}`))
    // switchMap(catId => this.#httpClient.get<Cat>(`https://api.thecatapi.com/v1/images/${catId}?api_key${this.#API_KEY}`))
  );

  notifyCatHoveEvent(catId: string): void {
    this.#catActionStream.next(catId);
  }
}
