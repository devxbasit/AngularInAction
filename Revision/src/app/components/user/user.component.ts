import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userService: UserService = inject(UserService);
  users$: Observable<User[]> = this.userService.users$;
  user$: Observable<User> = this.userService.selectUser$

  getSelectedUser(userId: number): void {

    this.userService.getUserById(userId);

  }
}
