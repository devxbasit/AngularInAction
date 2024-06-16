import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { SkipLoadingHttpContextToken } from '../constants/constants';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  loadingService = inject(LoadingService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestDelay = 3000;

    if (request.context.has(SkipLoadingHttpContextToken)) {
      return next.handle(request).pipe(delay(requestDelay));
    }

    this.loadingService.loadingOn();
    return next.handle(request).pipe(
      delay(requestDelay),
      finalize(() => {
        this.loadingService.loadingOff();
      })
    );
  }
}
