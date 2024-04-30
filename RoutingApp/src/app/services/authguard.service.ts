import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Resolve,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IDeactivateComponent } from '../interfaces/ideactivatecomponent';
import { Course } from '../interfaces/course';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService
  implements
  CanActivate,
  CanActivateChild,
  CanDeactivate<IDeactivateComponent>,
  Resolve<string>,
  CanLoad {
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);
  private _courseService: CourseService = inject(CourseService);

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('canActivateGuardInAction');
    if (this._authService.isAuthenticated()) {
      return true;
    } else {
      alert('Cannot proceed to checkout, please login first');
      this._router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('canActivatedChildGuardInAction');
    return true;
  }

  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canExit();
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | Observable<string> | Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World');
      }, 1000);
    });
  }
}
