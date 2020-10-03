import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../../store/models/application-state.model';
import { getBudgetsLoaded } from './store/selectors/budget.selectors';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { loadBudgets } from './store';

@Injectable({ providedIn: 'root' })
export class BudgetsGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getBudgetsLoaded).pipe(
      tap((isLoaded: boolean) => {
        if (!isLoaded) {
          this.store.dispatch(loadBudgets());
        }
      }),
      filter((isLoaded: boolean) => isLoaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
