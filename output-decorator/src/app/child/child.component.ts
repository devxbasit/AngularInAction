import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output('onBookAddEvent') bookAddEvent = new EventEmitter<string>();
  books: string[] = [];

  addBook(event: any) {
    this.books.push(event.target.value);
    this.bookAddEvent.emit(event.target.value);
    event.target.value = '';
  }
}
