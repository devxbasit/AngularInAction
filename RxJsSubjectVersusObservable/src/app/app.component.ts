import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject, observeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsSubjectVersusObservable';

  ngOnInit(): void {
    const subject = new Subject<number>();

    // subscriber 1
    subject.subscribe((data) => {
      console.log(`subject subscriber 1, data = ${data}`);
    });

    // subscriber 2
    subject.subscribe((data) => {
      console.log(`subject subscriber 2, data = ${data}`);
    });

    console.log('subject.next');
    subject.next(Math.random());

    console.log('subject.next');
    subject.next(Math.random());

    const observable = new Observable<number>((observer) => {
      console.log('observer.next');
      observer.next(Math.random());

      console.log('observer.next');
      observer.next(Math.random());
    });

    setTimeout(() => {
      // subscriber 1
      observable.subscribe((data) => {
        console.log(`observable subscriber 1, data = ${data}`);
      });
    }, 3000);

    setTimeout(() => {
      // subscriber 1
      observable.subscribe((data) => {
        console.log(`observable subscriber 2, data = ${data}`);
      });
    }, 6000);
  }
}
