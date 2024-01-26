import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService implements CanActivate {
  private _authService: AuthService = inject(AuthService);
  private _router: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this._authService.isAuthenticated()) {
      return true;
    } else {
      alert('Cannot proceed to checkout, please login first');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
