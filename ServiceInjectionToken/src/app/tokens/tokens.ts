import { InjectionToken } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoggerService } from '../services/logger.service';

export const USER_SERVICE_TOKEN = new InjectionToken<UserService>(
  'USER_SERVICE'
);
export const LOGGER_SERVICE_TOKEN = new InjectionToken<LoggerService>(
  'LOGGER_SERVICE'
);
export const API_URL_TOKEN = new InjectionToken<string>('API_URL');
export const SOMETHING_FLAG_TOKEN = new InjectionToken<boolean>(
  'SOMETHING_FLAG'
);
