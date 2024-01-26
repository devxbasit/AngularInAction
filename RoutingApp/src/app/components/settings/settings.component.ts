import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  goToNotificationSettings() {
    this.router.navigate(['notification'], { relativeTo: this.activeRoute });
  }
}
