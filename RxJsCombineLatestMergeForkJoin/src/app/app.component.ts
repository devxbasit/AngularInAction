import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, combineLatest, delay, forkJoin, interval, map, mapTo, merge, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'RxJsCombineLatestMergeForkJoin';
  httpClient: HttpClient = inject(HttpClient);

  timerOne$: Observable<number> = timer(1000, 4000);
  timerTwo$: Observable<number> = timer(2000, 4000);
  timerThree$: Observable<number> = timer(3000, 4000);

  combineLatest$: Observable<[number, number, number]> = combineLatest([this.timerOne$, this.timerTwo$, this.timerThree$]);


  first$: Observable<number> = interval(2500);
  second$: Observable<number> = interval(2000);
  third$: Observable<number> = interval(1500);
  fourth$: Observable<number> = interval(1000);
  merge$ = merge(
    this.first$.pipe(map(numb => "First")),
    this.second$.pipe(map(numb => "Second")),
    this.third$.pipe(map(numb => "Third")),
    this.fourth$.pipe(map(numb => "Fourth")),
  )

  users$ = this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(delay(4000))
  cats$ = this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10')
  forkJoin$ = forkJoin([this.users$, this.cats$]);


  ngOnInit(): void {

    // ***
    // keep one example uncommented at a time, otherwise it will mess up with console

    // this.combineLatest$.subscribe(([t1, t2, t3]) => {
    //   console.log(`combineLatest$ ->
    //   Timer One latest ${t1},
    //   Timer two latest ${t2},
    //   Timer three latest ${t3}
    //   `);
    // })

    // this.merge$.subscribe((msg) => console.log(msg));

    this.forkJoin$.subscribe(([users, cats]) => {
      console.log(users);
      console.log(cats);
    });

  }
}
