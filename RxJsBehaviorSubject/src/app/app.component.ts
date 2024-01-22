import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsBehaviorSubject';

  ngOnInit(): void {
    const seed = 10;

    const bs = new BehaviorSubject(seed);

    bs.subscribe((data) => {
      console.log('subscriber 1, data => ', data);
    });

    bs.subscribe((data) => {
      console.log('subscriber 2, data => ', data);
    });

    bs.next(20);
    bs.next(30);

    bs.subscribe((data) => {
      console.log('subscriber 3, data => ', data);
    });

    bs.complete();
    // bs.error('error');

    bs.subscribe({
      next: (data) => {
        console.log('subscriber 4, data => ', data);
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
        console.log(`Once BehaviorSubject receives the complete or the error notification and transitions into a stopped state,
                     all subsequent subscriptions will only receive the complete or the error notification and will not receive the current value.
                     In contrast, even in the stopped state in case of a completion or an error on the source observable, 
                     ReplaySubject still replays the cached values before sending the complete or the error error notification 
                     to new subsequent subscriptions. `);
      },
    });
  }
}
