import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  ISignInResponse,
  ISignUpResponse,
  IUser,
} from '../interfaces/core.interface.ts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);

  login(email: string, password: string): Observable<ISignInResponse> {
    return this.httpClient
      .post<ISignInResponse>(
        `${environment.firebaseAuthApiBaseUrl}/accounts:signInWithPassword?key=${environment.firebaseWebApiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleAuthError));
  }

  signup(email: string, password: string): Observable<ISignUpResponse> {
    return this.httpClient
      .post<ISignUpResponse>(
        `${environment.firebaseAuthApiBaseUrl}/accounts:signUp?key=${environment.firebaseWebApiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleAuthError));
  }

  formatAuthResponseToUser(
    authResponse: ISignInResponse | ISignUpResponse
  ): IUser {
    const expiresInMilliSeconds =
      new Date().getTime() + authResponse.expiresIn * 1000;

    return {
      localId: authResponse.localId,
      email: authResponse.email,
      token: authResponse.idToken,
      expirationDate: new Date(expiresInMilliSeconds),
    };
  }

  handleAuthError(err: HttpErrorResponse) {
    let errorMessage = '';

    switch (err.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'User email exists!';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Operation not allowed!';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempt, please try again later!';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Id not found!';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User account disabled!';
        break;

      default:
        errorMessage = 'Internal server error!';
    }

    return throwError(new Error(errorMessage));
  }
}
