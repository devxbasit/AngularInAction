import { EventEmitter, Injectable, inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { User } from '../Models/User';
import { LOGGER_SERVICE_TOKEN } from '../tokens/tokens';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class UserService {
  //private _logger: LoggerService = inject(LoggerService);
  private _logger: LoggerService = inject(LOGGER_SERVICE_TOKEN);
  private _users: User[] = [];
  userDetailsEvent: EventEmitter<User> = new EventEmitter<User>();

  addUser(user: User, apiUrl: string) {
    this._users.push(new User(user.name, user.email, Date.now()));
    console.log(apiUrl);
    this._logger.logInfo('New user added');
  }

  getUsers(): User[] {
    return this._users;
  }

  getUserById(userId: number): User {
    const userIndex = this._users.findIndex((user) => user.userId === userId);

    if (userIndex !== -1) {
      return this._users[userIndex];
    }

    throw Error('User not found!');
  }

  raiseUserDetailsEvent(userId: number) {
    this.userDetailsEvent.emit(this.getUserById(userId));
  }
}
