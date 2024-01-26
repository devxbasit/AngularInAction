import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  router: Router = inject(Router);
  activeRouter: ActivatedRoute = inject(ActivatedRoute);
  private _fragmentSubscription: Subscription;

  ngOnInit(): void {
    this._fragmentSubscription = this.activeRouter.fragment.subscribe(
      (fragment) => {
        if (fragment) {
          this.jumpToFragment(fragment);
        }
      }
    );
  }
  ngOnDestroy(): void {
    this._fragmentSubscription.unsubscribe();
  }

  jumpToFragment(fragment) {
    document.getElementById(fragment).scrollIntoView({ behavior: 'smooth' });
  }
  searchCourse(value: string) {
    this.router.navigate(['/courses'], { queryParams: { search: value } });
  }

  gotoNotificationSettings() {
    // absolute path - they get appended to domain
    this.router.navigate(['settings', 'notification']);
    this.router.navigate(['settings/notification']);
    this.router.navigateByUrl('settings/notification');
  }
}
