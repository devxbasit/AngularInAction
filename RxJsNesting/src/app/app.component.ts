import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';
import { City } from './interface/city';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RxJsNesting';
  userService: UserService = inject(UserService);
  city$: Observable<City> = null;

  getCityDetails(cityName): void {
    this.city$ = this.userService.getCityDetails(cityName);
  }
}
