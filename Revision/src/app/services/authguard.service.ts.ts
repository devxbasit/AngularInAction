import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, GuardResult, MaybeAsync, Resolve, ResolveEnd, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { IDeactivatedComponent } from '../interface/can-deactivate';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivatedComponent>, CanLoad, Resolve<string[]> {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true;
  }

  canDeactivate(component: IDeactivatedComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<string[]> {

    return ["one", "two"];

  }
}
