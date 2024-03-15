import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './interface/user';
import { forkJoin, map, mergeMap } from 'rxjs';
import { UserPost } from './interface/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  httpClient = inject(HttpClient);
  usersData$ = this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      mergeMap
        (usersArr =>
          forkJoin
            (usersArr.map
              (
                user => this.httpClient.get<UserPost[]>(`https://jsonplaceholder.typicode.com/posts?userid=${user.id}`)
                  .pipe(
                    map(userPosts => ({
                      user,
                      userPosts
                    }))
                  )
              )
            )
        )
    )
}
