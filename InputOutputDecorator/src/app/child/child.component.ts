import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() books: string[] = [];
  @Output() removeBookEvent = new EventEmitter<number>();

  removeBook(index: number) {
    this.removeBookEvent.emit(index);
  }
}
