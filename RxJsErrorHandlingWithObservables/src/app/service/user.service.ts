import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, never, throwError } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #httpClient: HttpClient = inject(HttpClient);
  users$: Observable<User[]> = this.#httpClient.get<User[]>('https://api.thecatapi.com/v1/imagessssssssss/search?limit=10')
    .pipe(catchError(this.handleError_catchAndReThrow));

  handleError_catchAndReThrow(err: HttpErrorResponse): Observable<never> {

    // logging at service layer here
    console.log('Error caught in the service', err);

    const errorMessage = `An error occurred in user service: ${err.error.message}`;
    const ObservableOfTypeNever$ = throwError(() => { return [errorMessage] });

    // catch & rethrow the error(replacement observable<never> to notify error) in service layer strategy
    return ObservableOfTypeNever$;
  }
}
