import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class LoggerService {
  logInfo(log: string) {
    alert(`LoggerService:LogInfo: ${log}`);
  }

  logTrace(log: string) {
    alert(`LoggerService:LogTrace: ${log}`);
  }

  logError(log: string, error: Error) {
    alert(`LoggerService:LogError: ${log}`);
  }
}
