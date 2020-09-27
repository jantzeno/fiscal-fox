import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from './store/models/application-state.model';
import { getIsAuth } from './store/selectors';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getIsAuth).pipe(
      tap((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigate(['login']);
        }
      }),
      filter((isAuth: boolean) => isAuth),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
