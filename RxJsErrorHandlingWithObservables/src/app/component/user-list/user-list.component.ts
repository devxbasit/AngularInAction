import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { User } from '../../interface/user';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  #userService: UserService = inject(UserService);
  errorMessage?: string;
  users$: Observable<User[]> = this.#userService.users$.pipe(
    catchError(errorArr => {

      // logging in the component here

      console.log('Error caught in the component', errorArr[0]);
      this.errorMessage = errorArr[0]
      const ObservableOfTypeNever$ = EMPTY;
      return ObservableOfTypeNever$;
    })
  )
}
