import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/User';
import { CommonModule } from '@angular/common';
import { USER_SERVICE_TOKEN } from '../../tokens/tokens';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  private _userService: UserService = inject(USER_SERVICE_TOKEN);
  user: User;

  ngOnInit(): void {
    this._userService.userDetailsEvent.subscribe((data) => {
      this.user = data;
    });
  }
}
