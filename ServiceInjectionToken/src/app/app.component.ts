import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserFormComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ServiceInjectionToken';
}
