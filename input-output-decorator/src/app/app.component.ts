import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'input-output-decorator';
  deletedBook = '';
  books: string[] = [];

  addBook(event: any) {
    this.books.push(event.target.value);
    event.target.value = '';
  }

  removeBook(index: number) {
    this.deletedBook = this.books[index];
    this.books.splice(index, 1);
  }
}
