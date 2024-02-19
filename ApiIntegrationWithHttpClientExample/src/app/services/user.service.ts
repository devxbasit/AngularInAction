import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #getUserApiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  #httpClient: HttpClient = inject(HttpClient);
  users$: Observable<User[]> = this.#httpClient.get<User[]>(
    this.#getUserApiUrl
  );
}
