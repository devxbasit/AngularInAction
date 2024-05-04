import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Auth Interceptor In Action");

  // req are immutable - we have to clone

  //modifying requests
  const token = inject(AuthService).getAuthToken();
  const newHeaders = req.headers.append('auth', token);

  const newReq = req.clone({
    headers: newHeaders
  });

  return next(newReq);
};
