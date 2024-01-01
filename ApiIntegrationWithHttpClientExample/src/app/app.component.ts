import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: User[] = []
  title = 'ApiIntegrationWithHttpClientExample';

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        console.log(response);
        this.usersList = response;
      },
      error: (error) => {
        console.log(error);
      },
      complete() {
        console.log('request completed');

      }
    })
  }
}
