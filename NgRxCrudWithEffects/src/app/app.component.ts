import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/app.reducer';
import {
  notificationSelector,
  showLoadingSpinnerSelector,
} from './Shared/store/shared.selectors';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoadingSpinner = false;
  store = inject(Store<IAppState>);
  notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.store.select(showLoadingSpinnerSelector).subscribe((value) => {
      this.showLoadingSpinner = value;
    });

    this.store.select(notificationSelector).subscribe((notification) => {
      this.notificationService.newNotification(notification);
    });
  }
}
