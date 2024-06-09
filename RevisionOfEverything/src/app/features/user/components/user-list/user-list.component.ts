import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/core/interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userService = inject(UserService);
  usersList = this.userService.getUsersList$;
  @Output() deleteUserEvent: EventEmitter<string> = new EventEmitter<string>();

  deleteUser(id: string | undefined) {}
  editUser(id: string | undefined) {}
  refreshGrid() {}
}
