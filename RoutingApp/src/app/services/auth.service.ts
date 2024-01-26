import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: boolean = false;
  private _userService: UserService = inject(UserService);

  constructor() {}

  login(username: string, password: string) {
    const user: User = this._userService.getUserByUsernameAndPassword(
      username.trim().toLowerCase(),
      password.trim().toLowerCase()
    );

    if (user) {
      this._isAuthenticated = true;
    } else {
      this._isAuthenticated = false;
    }

    return user;
  }

  logout() {
    this._isAuthenticated = false;
    return true;
  }

  isAuthenticated() {
    return this._isAuthenticated;
  }
}
