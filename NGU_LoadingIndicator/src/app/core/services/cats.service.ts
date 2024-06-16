import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  SkipLoadingHttpContextToken
} from '../constants/constants';
import { Cat } from '../models/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  httpClient = inject(HttpClient);

  getAllCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(
      'https://api.thecatapi.com/v1/images/search?limit=100'
    );
  }

  getById(catId: string): Observable<Cat> {
    const context = new HttpContext().set(SkipLoadingHttpContextToken, false);

    return this.httpClient.get<Cat>(
      `https://api.thecatapi.com/v1/images/${catId}`,
      { context: context }
    );
  }
}
