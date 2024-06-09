import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/core/interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient: HttpClient = inject(HttpClient);
  getUsersList$: Observable<User[]> = this.httpClient.get<User[]>(
    `${environment.userApiBaseUrl}/users/`
  );

  #addUserActionStream = new Subject<User>();
  #updateUserByIdActionStream = new Subject<User>();

  #getUserByIdActionStream = new Subject<number>();
  #deleteUserByIdActionStream = new Subject<number>();

  getUserById$: Observable<User> = this.#getUserByIdActionStream
    .asObservable()
    .pipe(
      tap((userId) => console.log(userId)),
      switchMap((userId) =>
        this.httpClient.get<User>(
          `${environment.userApiBaseUrl}/users/${userId}`
        )
      )
    );

  updateUserById$: Observable<User> = this.#getUserByIdActionStream
    .asObservable()
    .pipe(
      tap((userId) => console.log(userId)),
      switchMap((userId) =>
        this.httpClient.put<User>(`${environment.userApiBaseUrl}/users`, {})
      )
    );

  deleteUserById$: Observable<User> = this.#getUserByIdActionStream
    .asObservable()
    .pipe(
      tap((userId) => console.log(userId)),
      switchMap((userId) =>
        this.httpClient.delete<User>(
          `${environment.userApiBaseUrl}/users/${userId}`
        )
      )
    );

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return of('');
  }
}

//   GET
// GET/api/users/:id
// POST/api/users/

// PUT user/api/users/:id
// PATCH/api/users/:id

// DELETE/api/users/:id
