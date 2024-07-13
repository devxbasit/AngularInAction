import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  mergeMap,
  tap,
  throwError,
} from 'rxjs';
import { IUser, User } from '../../user/models/user';
import { Role } from '../enums/auth.enum';
import { decode } from 'punycode';
import { table } from 'console';
import { stat } from 'fs';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { transformError } from '../../common/common';
import { CacheService } from '../../common/services/cache.service';

interface IAuthService {
  readonly authStatus$: Observable<IAuthStatus>;
  readonly currentUser$: Observable<IUser>;

  login(email: string, password: string): Observable<void>;
  logout(clearToken?: string): void;
  getToken(): string;
}

export interface IAuthStatus {
  isAuthenticated: boolean;
  userRole: Role;
  userId: string;
}

export interface IServerAuthResponse {
  accessToken: string;
}

export const defaultAuthStatus: IAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: '',
};

export abstract class AuthService implements IAuthService {
  protected readonly cache = inject(CacheService);

  authStatus$ = new BehaviorSubject<IAuthStatus>(
    this.cache.getItem('authStatus') ?? defaultAuthStatus
  );
  currentUser$ = new BehaviorSubject<IUser>(new User());

  constructor() {
    this.authStatus$.pipe(
      tap((authStatus) => {
        this.cache.setItem('authStatus', authStatus);
      })
    );
  }

  login(email: string, password: string): Observable<void> {
    this.clearToken();
    const loginResponse$ = this.authProvider(email, password).pipe(
      map((value) => {
        this.setToken(value.accessToken);
        const token = decode(value.accessToken);
        return this.transformJwtToken(token);
      }),
      tap((authStatus: IAuthStatus) => this.authStatus$.next(authStatus)),
      filter((authStaus: IAuthStatus) => authStaus.isAuthenticated),
      mergeMap(() => this.getCurrentUser()),
      map((user: User) => this.currentUser$.next(user)),
      catchError(transformError)
    );

    loginResponse$.subscribe({
      error: (err) => {
        this.logout();
        return throwError(err);
      },
    });

    return loginResponse$;
  }

  logout(clearToken?: string | undefined): void {
    if (clearToken) {
      this.clearToken();
    }
    setTimeout(() => this.authStatus$.next(defaultAuthStatus), 0);
  }

  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse>;

  protected abstract transformJwtToken(token: unknown): IAuthStatus;
  protected abstract getCurrentUser(): Observable<User>;
  protected setToken(jwt: string) {
    this.cache.setItem('jwt', jwt);
  }
  getToken(): string {
    return this.cache.getItem('jwt') ?? '';
  }
  protected clearToken() {
    this.cache.removeItem('jwt');
  }
}
