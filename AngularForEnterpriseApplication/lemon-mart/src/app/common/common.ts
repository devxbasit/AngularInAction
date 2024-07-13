import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function transformError(error: HttpErrorResponse | string) {
  // error can be of two type
  // 1. client side error - using =>  throw
  // 2. server side error

  let errorMessage = 'An unknown error has occured';

  if (typeof error === 'string') {
    errorMessage = error;
  } else if (error.error instanceof ErrorEvent) {
    //client side error
    errorMessage = error.error.message;
  } else if (error.status) {
    //server side error
    errorMessage = `Request failed with status code${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return throwError(errorMessage);
}
