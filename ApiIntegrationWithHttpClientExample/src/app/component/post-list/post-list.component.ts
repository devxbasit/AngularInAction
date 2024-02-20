import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  #postService: PostService = inject(PostService);
  posts$: Observable<Post[]> = this.#postService.posts$;
  selectedPost$: Observable<Post | undefined> = this.#postService.selectedPost$;

  viewPostDetails(postId: number) {
    this.#postService.selectedPostEvent(postId);
  }
}
