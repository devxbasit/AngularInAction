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
  title = 'input-decorator';
  data: string = '';
  books: string[] = [];

  setData({ target }: any) {
    let { value } = target;
    this.data = value;
  }

  addBook(event: any) {
    this.books.push(event.target.value);

    console.log(this.books);
    event.target.value = '';
  }
}
