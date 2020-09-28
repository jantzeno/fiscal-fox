import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../../../store/models/application-state.model';
import { getBudgets } from '../../../store/selectors/budget.selectors';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { loadBudgets } from 'src/app/store';

@Injectable({ providedIn: 'root' })
export class BudgetGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getBudgets).pipe(
      tap((budgets) => {
        if (budgets.length < 1) {
          this.store.dispatch(loadBudgets());
        }
      }),
      filter((budgets) => budgets.length !== 0),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
