import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'RxJsUnsubscribeSubject';

  subject: Subject<number> = new Subject<number>();
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  @ViewChild('innerContainer1') innerContainer1: ElementRef;
  @ViewChild('innerContainer2') innerContainer2: ElementRef;
  @ViewChild('innerContainer3') innerContainer3: ElementRef;

  ngOnInit(): void {
    let i = 0;

    setInterval(() => {
      this.subject.next(++i);
    }, 1000);
  }

  subscribe(num: number) {
    switch (num) {
      case 1:
        this.subscription1 = this.subject.subscribe((data) => {
          this.innerContainer1.nativeElement.append(`${data} `);
        });
        break;
      case 2:
        this.subscription2 = this.subject.subscribe((data) => {
          this.innerContainer2.nativeElement.append(`${data} `);
        });
        break;
      case 3:
        this.subscription3 = this.subject.subscribe((data) => {
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
