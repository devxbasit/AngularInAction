import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  toastr = inject(ToastrService);

  newNotification(notification: {
    message: string;
    type: 'success' | 'error';
  }) {
    if (notification.message) {
      switch (notification.type) {
        case 'success':
          this.success(notification.message);
          break;

        case 'error':
          this.error(notification.message);
          break;
      }
    }
  }
  success(message: string) {
    this.toastr.success(message);
  }

  error(message: string) {
    this.toastr.error(message);
  }
}
