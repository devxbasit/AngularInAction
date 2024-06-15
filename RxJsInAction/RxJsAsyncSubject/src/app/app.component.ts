import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsAsyncSubject';

  ngOnInit(): void {
    const as = new AsyncSubject();

    as.subscribe((data) => {
      console.log('subscriber 1, Data => ', data);
    });

    as.subscribe((data) => {
      console.log('subscriber 2, Data => ', data);
    });

    as.subscribe((data) => {
      console.log('subscriber 3, Data => ', data);
    });

    as.next(100);
    as.next(200);
    as.next(300);
    as.next(400);

    //as.error('error');
    as.complete();

    as.subscribe({
      next: (data) => {
        console.log('subscriber 4, Data => ', data);
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
