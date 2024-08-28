import { map, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPost } from '../interfaces/core.interface.ts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpClient = inject(HttpClient);
  env = environment;
  postsCollectionName = 'posts';

  addPost(post: IPost) {
    return this.httpClient.post<{ name: string }>(
      `${this.env.firebaseRealTimeDbApiBaseUrl}/${this.postsCollectionName}.json`,
      post
    );
  }

  updatePost(post: IPost) {
    const postId = post.postId;

    // quick fix - typescript TypeError: Cannot delete property - readonly
    const postClond = { ...post };
    delete postClond.postId;

    let postPayload = {};

    // quick fix
    if (postId) {
      postPayload = { [postId]: postClond };
    }

    return this.httpClient.patch(
      `${this.env.firebaseRealTimeDbApiBaseUrl}/${this.postsCollectionName}.json`,
      postPayload
    );
  }

  deletePost(postId: string) {
    return this.httpClient.delete<null>(
      `${this.env.firebaseRealTimeDbApiBaseUrl}/${this.postsCollectionName}/${postId}.json`
    );
  }

  getPostList(): Observable<IPost[]> {
    return this.httpClient
      .get(
        `${this.env.firebaseRealTimeDbApiBaseUrl}/${this.postsCollectionName}.json`
      )
      .pipe(
        map((postCollection: Object) => {
          if (!postCollection) {
            return [];
          }

          const posts: IPost[] = [];

          for (const [key, value] of Object.entries(postCollection)) {
            posts.push({ ...value, postId: key });
          }

          return posts;
        })
      );
  }

  getPost(postId: string): Observable<IPost> {
    return this.httpClient
      .get<IPost>(
        `${this.env.firebaseRealTimeDbApiBaseUrl}/${this.postsCollectionName}.json`
      )
      .pipe(
        map((post) => {
          return { ...post, postId: postId };
        })
      );
  }
}
