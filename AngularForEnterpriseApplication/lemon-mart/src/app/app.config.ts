import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AuthService } from './auth/services/auth.service';
import { InMemoryAuthService } from './auth/services/in-memory-auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: AuthService, useClass: InMemoryAuthService },
  ],
};
