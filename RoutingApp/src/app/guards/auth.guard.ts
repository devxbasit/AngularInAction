import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function checkoutAuthGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


  const _router: Router = inject(Router);
  const _authService: AuthService = inject(AuthService);


  if (_authService.isAuthenticated()) {
    return true;
  } else {
    alert('Cannot proceed to checkout, please login first');
    _router.navigate(['/login']);
    return false;
  }
}
