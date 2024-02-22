import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, combineLatest, map } from 'rxjs';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // RxJs Patterns - https://www.youtube.com/watch?v=vtCDRiG__D4

  // Shape On Action Pattern
  #httpClient: HttpClient = inject(HttpClient);
  posts$: Observable<Post[]> = this.#httpClient.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts`
  );

  #postSelectedSubject: Subject<number> = new Subject<number>();
  #postSelectedAction$: Observable<number> =
    this.#postSelectedSubject.asObservable();
  selectedPost$: Observable<Post | undefined> = combineLatest([
    this.posts$,
    this.#postSelectedAction$,
  ]).pipe(
    map(([posts, selectedPostId]) => {
      return posts.find((post) => post.id === selectedPostId);
    })
  );

  selectedPostEvent(postId: number) {
    this.#postSelectedSubject.next(postId);
  }
}
