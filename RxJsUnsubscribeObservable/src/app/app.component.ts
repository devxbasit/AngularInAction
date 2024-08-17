import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'RxJsUnsubscribeObservable';
  observable: Observable<number>;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  @ViewChild('innerContainer1') innerContainer1: ElementRef;
  @ViewChild('innerContainer2') innerContainer2: ElementRef;
  @ViewChild('innerContainer3') innerContainer3: ElementRef;

  ngOnInit(): void {
    this.observable = new Observable<number>((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(++i);
      }, 1000);
    });
  }

  subscribe(num: number) {
    switch (num) {
      case 1:
        this.subscription1 = this.observable.subscribe((data) => {
          this.innerContainer1.nativeElement.append(`${data} `);
        });
        break;
      case 2:
        this.subscription2 = this.observable.subscribe((data) => {
          this.innerContainer2.nativeElement.append(`${data} `);
        });
        break;
      case 3:
        this.subscription3 = this.observable.subscribe((data) => {
          this.innerContainer3.nativeElement.append(`${data} `);
        });
        break;
    }
  }

  unsubscribe(num: number) {
    switch (num) {
      case 1:
        this.subscription1.unsubscribe();
        break;
      case 2:
        this.subscription2.unsubscribe();
        break;
      case 3:
        this.subscription3.unsubscribe();
        break;
    }
  }
}
