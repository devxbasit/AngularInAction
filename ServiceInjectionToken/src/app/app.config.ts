import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoggerService } from './services/logger.service';
import { routes } from './app.routes';
import { UserService } from './services/user.service';
import {
  API_URL_TOKEN,
  LOGGER_SERVICE_TOKEN,
  SOMETHING_FLAG_TOKEN,
  USER_SERVICE_TOKEN,
} from './tokens/tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: USER_SERVICE_TOKEN, useClass: UserService },
    { provide: LOGGER_SERVICE_TOKEN, useClass: LoggerService },
    { provide: SOMETHING_FLAG_TOKEN, useValue: true },
    { provide: API_URL_TOKEN, useValue: 'Last one DI wins' },
    { provide: API_URL_TOKEN, useValue: 'https://fixer.io' },
  ],
};
