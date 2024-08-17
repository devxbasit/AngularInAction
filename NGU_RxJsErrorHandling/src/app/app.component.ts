import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, finalize, of, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NGU_RxJsErrorHandling';
  inValidUlr: string = 'ttps://api.thecatapi.com/v1/images/search';
  httpClient = inject(HttpClient);

  noErrorHandling() {
    return this.httpClient.get(this.inValidUlr).subscribe({
      next: (data) => console.log('Subscriber: next, Data = ', data),
      error: (error) => console.log('subscriber: error, error = ', error),
      complete: () => console.log('subscriber: complete'),
    });
  }

  catchAndReplace() {
    this.httpClient
      .get(this.inValidUlr)
      .pipe(
        tap({
          next: () => {
            console.log('tap on next');
          },
          error: () => {
            console.log('tap on error');
          },
          complete: () => {
            console.log('tap on complete');
          },
        }),
        catchError((err) => {
          console.log('catching at first catchError, and rethrowing');
          return throwError(err);
        }),
        catchError((err) => {
          // no custom logic, just rethrow
          return of(['Array of String']);
        })
      )
      .subscribe({
        next: (data) => console.log('Subscriber: next, Data = ', data),
        error: (error) => console.log('subscriber: error, error = ', error),
        complete: () => console.log('subscriber: complete'),
      });
  }

  catchAndRethrow() {
    this.httpClient
      .get(this.inValidUlr)
      .pipe(
        tap({
          next: () => {
            console.log('tap on next');
          },
          error: () => {
            console.log('tap on error');
          },
          complete: () => {
            console.log('tap on complete');
          },
        }),
        catchError((err) => {
          // some custom logic here, logging
          // rethrow

          return throwError(err);
        })
      )
      .subscribe({
        next: (data) => console.log('Subscriber: next, Data = ', data),
        error: (error) => console.log('subscriber: error, error = ', error),
        complete: () => console.log('subscriber: complete'),
      });
  }

  multipleCatch() {
    this.httpClient
      .get(this.inValidUlr)
      .pipe(
        tap({
          next: () => {
            console.log('tap on next');
          },
          error: () => {
            console.log('tap on error');
          },
          complete: () => {
            console.log('tap on complete');
          },
        }),
        catchError((err) => {
          console.log('catching at first catchError, and rethrowing');
          return throwError(err);
        }),
        catchError((err) => {
          console.log('catching at second catchError, and rethrowing');
          return throwError(err);
        }),
        catchError((err) => {
          console.log('catching at third catchError, and rethrowing');
          return throwError(err);
        })
      )
      .subscribe({
        next: (data) => console.log('Subscriber: next, Data = ', data),
        error: (error) => console.log('subscriber: error, error = ', error),
        complete: () => console.log('subscriber: complete'),
      });
  }

  finalizeExample() {
    this.httpClient
      .get(this.inValidUlr)
      .pipe(
        tap({
          next: () => {
            console.log('tap on next');
          },
          error: () => {
            console.log('tap on error');
          },
          complete: () => {
            console.log('tap on complete');
          },
        }),
        finalize(() => {
          console.log(
            'finalize 1 in Action, finalize will always be executing no matter what'
          );
        }),
        catchError((err) => {
          console.log('catching at first catchError, and rethrowing');
          return throwError(err);
        }),
        catchError((err) => {
          console.log('catching at second catchError, and rethrowing');
          return throwError(err);
        }),
        finalize(() => {
          console.log(
            'finalize 2 in Action, finalize will always be executing no matter what'
          );
        }),
        catchError((err) => of(['Array of String'])),
        finalize(() => {
          console.log(
            'finalize 3 in Action, finalize will always be executing no matter what'
          );
        })
      )
      .subscribe({
        next: (data) => console.log('Subscriber: next, Data = ', data),
        error: (error) => console.log('subscriber: error, error = ', error),
        complete: () => console.log('subscriber: complete'),
      });
  }
}
