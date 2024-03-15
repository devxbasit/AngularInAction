import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './service/post.service';
import { Post } from './interface/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postService: PostService = inject(PostService)
  posts$: Observable<Post[]> = this.postService.postWithCategories$;

  userSearchAction(username: string) {
    this.postService.userAction(username);
  }
}
