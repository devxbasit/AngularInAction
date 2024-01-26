import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification-settings',
  standalone: true,
  imports: [],
  templateUrl: './notification-settings.component.html',
  styleUrl: './notification-settings.component.scss',
})
export class NotificationSettingsComponent {
  router: Router = inject(Router);
  activeRouter: ActivatedRoute = inject(ActivatedRoute);

  goToNotes() {
    //absolute path - they get appended to domain
    //this.router.navigate(['settings', 'notification']);
    //this.router.navigate(['settings/notification']);
    //this.router.navigateByUrl('settings/notification');

    this.router.navigate(['settings/notification']);
  }
}
