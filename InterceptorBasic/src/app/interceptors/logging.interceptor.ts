import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Logging Interceptor In Action");


  return next(req).pipe(tap(event => {

    console.log('Event: ', event);


    if (event.type === HttpEventType.Response) {
      console.log("----------------- http response arrived");

    }
  }));
};
