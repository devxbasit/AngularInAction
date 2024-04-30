import { Injectable, inject } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // declarative data access pattern
  httpClient: HttpClient = inject(HttpClient);
  users$: Observable<User[]> = this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users")


  // retrieve on Action Pattern
  userIdSubject: Subject<number> = new Subject<number>();
  userIdSubjectObs$: Observable<number> = this.userIdSubject.asObservable();
  selectUser$: Observable<User> = this.userIdSubjectObs$
    .pipe(
      switchMap((userId) => {
        return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
      })
    );

  getUserById(userId: number): void {

    this.userIdSubject.next(userId);

  }
}



