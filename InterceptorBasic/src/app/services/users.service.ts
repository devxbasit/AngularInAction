import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient: HttpClient = inject(HttpClient);

  user$ = this.httpClient.get("https://jsonplaceholder.typicode.com/users");


}
