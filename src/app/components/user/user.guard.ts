import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../../store/models/application-state.model';
import { getUserLoaded } from './store/selectors/user.selectors';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { loadUser } from './store';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getUserLoaded).pipe(
      tap((isLoaded: boolean) => {
        if (!isLoaded) {
          this.store.dispatch(loadUser());
        }
      }),
      filter((isLoaded: boolean) => isLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
