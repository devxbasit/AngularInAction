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
    this.subjectDemo();
    this.observableDemo();
  }

  subjectDemo() {
    const subject = new Subject<number>();

    console.log('Subject - Registering Subscriber 1');
    subject.subscribe((data) => {
      console.log(`subject subscriber 1, data = ${data}`);
    });

    console.log('Subject - Registering Subscriber 2');
    subject.subscribe((data) => {
      console.log(`subject subscriber 2, data = ${data}`);
    });

    console.log('subject.next(x)');
    subject.next(Math.random());

    console.log('subject.next(x)');
    subject.next(Math.random());

    console.log('Subject - Registering Subscriber 3');
    subject.subscribe((data) => {
      console.log(`subject subscriber 3, data = ${data}`);
    });

    console.log('subject.next(x)');
    subject.next(Math.random());
  }

  observableDemo() {
    const observable = new Observable<number>((observer) => {
      console.log('observer.next(x)');
      observer.next(Math.random());

      console.log('observer.next(x)');
      observer.next(Math.random());
    });

    console.log('Observable - Registering Subscriber 1');
    observable.subscribe((data) => {
      console.log(`observable's subscriber 1, data = ${data}`);
    });

    setTimeout(() => {
      console.log('Observable - Registering Subscriber 2');
      observable.subscribe((data) => {
        console.log(`observable's subscriber 2, data = ${data}`);
      });
    }, 3000);

    setTimeout(() => {
      console.log('Observable - Registering Subscriber 3');
      observable.subscribe((data) => {
        console.log(`observable's subscriber 3, data = ${data}`);
      });
    }, 6000);
  }
}
