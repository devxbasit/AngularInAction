import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: User[] = [
    { name: 'Basit', username: 'basit', password: 'basit' },
    { name: 'Basit', username: 'user2', password: 'user2' },
    { name: 'Basit', username: 'user3', password: 'user3' },
    { name: 'Basit', username: 'user4', password: 'user4' },
  ];

  getUserByUsernameAndPassword(username: string, password: string): User {
    return this._users.find(
      (u) => u.username === username && u.password === password
    );
  }
}
