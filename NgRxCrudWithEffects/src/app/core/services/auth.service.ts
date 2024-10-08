import { environment } from './../../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  ISignInResponse,
  ISignUpResponse,
  IUser,
} from '../interfaces/core.interface.ts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);
  env = environment;

  signIn(email: string, password: string): Observable<ISignInResponse> {
    return this.httpClient
      .post<ISignInResponse>(
        `${this.env.firebaseAuthApiBaseUrl}/accounts:signInWithPassword?key=${this.env.firebaseWebApiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.handleAuthError));
  }

  signup(email: string, password: string): Observable<ISignUpResponse> {
    return this.httpClient
      .post<ISignUpResponse>(
        `${this.env.firebaseAuthApiBaseUrl}/accounts:signUp?key=${this.env.firebaseWebApiKey}`,
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

    switch (err.error.error.errors[0].message) {
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

      case 'INVALID_EMAIL':
        errorMessage = 'Invalid email!';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User account disabled!';
        break;

      default:
        errorMessage = err.error.error.errors[0].message;
        break;
    }

    return throwError(new Error(errorMessage));
  }
}
