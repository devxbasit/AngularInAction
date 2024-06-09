import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/interface';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent {
  @Input() User: User = { id: '', name: '', email: '' };

  deleteUser() {}

  cancelDelete() {}
}
