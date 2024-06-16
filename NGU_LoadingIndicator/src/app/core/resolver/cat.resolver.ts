import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.interface';
import { CatsService } from '../services/cats.service';

@Injectable({ providedIn: 'root' })
export class catResolver implements Resolve<Cat> {
  catService = inject(CatsService);
  router = inject(Router);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Cat | Observable<Cat> | Promise<Cat> {
    const catId = route.paramMap.get('id') || '';

    return this.catService.getById(catId);
  }
}
