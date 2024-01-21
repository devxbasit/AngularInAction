import { Component, inject } from '@angular/core';
import { User } from '../../Models/User';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { API_URL_TOKEN, USER_SERVICE_TOKEN } from '../../tokens/tokens';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  // private _userService: UserService = inject(UserService);
  private _userService: UserService = inject(USER_SERVICE_TOKEN);
  private _apiUrl: string = inject(API_URL_TOKEN);
  name: string = '';
  email: string = '';

  addUser() {
    this._userService.addUser(new User(this.name, this.email), this._apiUrl);
    this.name = this.email = '';
  }
}
