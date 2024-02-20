import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, pipe, switchMap } from 'rxjs';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // RxJs Patterns - https://www.youtube.com/watch?v=vtCDRiG__D4

  // Declarative data access pattern
  #getUserApiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  #httpClient: HttpClient = inject(HttpClient);
  users$: Observable<User[]> = this.#httpClient.get<User[]>(
    this.#getUserApiUrl
  );

  // Retrieve on Action Pattern
  #viewUserPostsApiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  #userPostsStreamSubject: Subject<number> = new Subject<number>();
  #userPostsStreamObservable$: Observable<number> =
    this.#userPostsStreamSubject.asObservable();

  userPost$: Observable<Post[]> = this.#userPostsStreamObservable$.pipe(
    switchMap((userId) =>
      this.#httpClient.get<Post[]>(
        `${this.#viewUserPostsApiUrl}/${userId}/posts`
      )
    )
  );

  userPostsEvent(userId: number) {
    this.#userPostsStreamSubject.next(userId);
  }
}
