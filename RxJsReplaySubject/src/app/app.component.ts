import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'RxJsReplaySubject';
  ngOnInit(): void {
    const bufferSize = 3;
    const windowTime = 2000;

    const rs = new ReplaySubject(bufferSize, windowTime);

    rs.next(1);
    rs.next(2);
    rs.next(3);
    rs.next(4);
    rs.next(5);
    rs.next(6);

    rs.subscribe((data) => {
      console.log('subscriber 1, data => ', data);
    });

    rs.subscribe((data) => {
      console.log('subscriber 2, data => ', data);
    });

    rs.subscribe((data) => {
      console.log('subscriber 3, data => ', data);
    });

    rs.complete();
    // bs.error('error');

    rs.subscribe({
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
