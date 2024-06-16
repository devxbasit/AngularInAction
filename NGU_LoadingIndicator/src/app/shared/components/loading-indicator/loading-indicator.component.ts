import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() detectRouteTransition = false;
  @ContentChild('loading') customLoadingIndicator: TemplateRef<any> | null =
    null;
  loading$: Observable<boolean>;

  constructor(private loadingService: LoadingService, private router: Router) {
    this.loading$ = loadingService.loadingIndicator$;
  }

  ngOnInit(): void {
    // another approach - without using interceptor, by listening to router events
    if (this.detectRouteTransition) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              debugger;
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }
}
