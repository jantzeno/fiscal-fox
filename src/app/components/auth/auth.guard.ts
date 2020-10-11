import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../../store/models/application-state.model';
import { getIsAuth } from './store/selectors';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { requestTokenCheck } from './store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  // Get Token form localStorage
  get token(): string {
    return localStorage.getItem('token');
  }

  constructor(private store: Store<ApplicationState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getIsAuth).pipe(
      tap((isAuth: boolean) => {
        if (isAuth || this.token) {
          this.store.dispatch(requestTokenCheck({ token: this.token }));
        } else {
          this.router.navigate(['auth/login']);
        }
      }),
      filter((isAuth: boolean) => isAuth),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
