import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, catchError, combineLatest, map, of, switchMap, throwError } from 'rxjs';
import { User } from '../interface/user';
import { Post } from '../interface/post';
import { Category } from '../interface/category';
import { Result } from '../interface/result';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  #httpClient: HttpClient = inject(HttpClient)
  #userSubject: Subject<string> = new Subject<string>();
  userObservable$: Observable<string> = this.#userSubject.asObservable();
  #allCategories$: Observable<Category[]> = this.#httpClient.get<Category[]>(`http://localhost:3000/category`);
  #allUserPosts$: Observable<Post[]> = this.userObservable$.pipe(
    switchMap(username => this.getUserId(username)),
    switchMap(result => this.getPostForUser(result.result))
  );

  postWithCategories$ = combineLatest([this.#allCategories$, this.#allUserPosts$])
    .pipe(
      map(([categories, posts]) => this.mapCategories(categories, posts))
    );

  mapCategories(categories: Category[], posts: Post[]): Post[] {
    return posts.map(p => ({
      ...p,
      category: categories.find(cat => cat.id === p.categoryId)?.category

    }) as Post)
  }

  userAction(username: string) {
    this.#userSubject.next(username);
  }

  private getUserId(username: string): Observable<Result<number>> {
    return this.#httpClient.get<User[]>(`http://localhost:3000/users?username=${username}`)
      .pipe(
        catchError(this.handleError),
        map(users => this.mapSuccessResult(users[0].id))
      )
  }

  private getPostForUser(userId: number): Observable<Result<Post[]>> {
    return this.#httpClient.get<Post[]>(`http://localhost:3000/posts?userId=${userId}`)
      .pipe(
        catchError(this.handleError),
        map(posts => this.mapSuccessResult(posts))
      )
  }

  private mapSuccessResult<T>(response: T): Result<T> {
    return {
      isSuccess: true,
      result: response,
      error: null
    }
  }

  private mapErrorResult<T>(errors: string[]) {
    return {
      isSuccess: false,
      result: null,
      error: { errors: errors }
    }
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => this.mapErrorResult([error.message]));
  }
}

// http://localhost:3000/users?username=Basit
// http://localhost:3000/category
// http://localhost:3000/posts?userId=2