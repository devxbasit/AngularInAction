import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, NgStyle, JsonPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userService: UserService = inject(UserService);
  users$ = this.userService.users$;
  userPosts$ = this.userService.userPost$;

  getUserPostsEvent(userId: number) {
    this.userService.getUserPostsEvent(userId);
  }
}
