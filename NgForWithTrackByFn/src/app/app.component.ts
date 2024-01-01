import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgForWithTrackByFn';
  users: any = []
  nextId: number = 0;
  name: string = ''


  ngOnInit() {
    this.refresh();
  }

  refresh() {
    console.log('refresh');

    this.users = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" }
    ]

    this.nextId = 4;
  }

  removeUser(index: number) {

    this.users.splice(index, 1);

    console.log(this.users)


  }

  trackUsers(index: number, item: any) {
    return item.id;
  }

  addUser() {
    this.users.push({ id: this.nextId++, name: this.name });

    this.name = ''
    console.log(this.users)

  }
}

