import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'RxJsSubjectAsObservableAndObserver';

  ngOnInit(): void {
    const observable = ajax(
      'https://random-data-api.com/api/users/random_user?size=1'
    );

    observable.subscribe((response) => {
      console.log('observable subscriber 1');
      console.log(response);
    });
    observable.subscribe((response) => {
      console.log('observable subscriber 2');
      console.log(response);
    });
    observable.subscribe((response) => {
      console.log('observable subscriber 3');
      console.log(response);
    });

    const subject = new Subject();
    // subject itself is subscribing to an observable, here subject is as consumer of data
    // which ajax observable is going to return
    observable.subscribe(subject);

    // subject as observable/producer -- no subject subscriber, so no one will receive
    subject.next(1);

    subject.subscribe((response) => {
      console.log('subject subscriber 1');
      console.log(response);
    });
    subject.subscribe((response) => {
      console.log('subject subscriber 2');
      console.log(response);
    });
    subject.subscribe((response) => {
      console.log('subject subscriber 3');
      console.log(response);
    });

    // subject.next(2);
    // subject.next(3);
  }
}
