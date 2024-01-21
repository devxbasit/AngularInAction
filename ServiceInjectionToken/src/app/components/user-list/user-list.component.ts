import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { USER_SERVICE_TOKEN } from '../../tokens/tokens';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  private _userService: UserService = inject(USER_SERVICE_TOKEN);
  users: User[] = [];

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }

  viewDetails(userId: number): void {
    this._userService.raiseUserDetailsEvent(userId);
  }
}
