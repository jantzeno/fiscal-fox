import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetService } from '../../services/data/budget.service';
import { BudgetResponse, AllBudgetsResponse } from '../../models/budget.model';

@Injectable({ providedIn: 'root' })
export class BudgetEffects {
  // Get All Budgets
  loadBudgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.loadBudgets),
      switchMap(() =>
        this.budgetService.getAllBudgets().pipe(
          map(({ budgets }: AllBudgetsResponse) =>
            BudgetActions.loadBudgetsSuccess({ budgets })
          ),
          catchError((error) => of(BudgetActions.loadBudgetsFailure({ error })))
        )
      )
    )
  );

  // Add Budget
  addBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.addBudget),
      switchMap(({ budget }) =>
        this.budgetService.createBudget(budget.name, budget.amount).pipe(
          map(({ budget }: BudgetResponse) =>
            BudgetActions.addBudgetSuccess({ budget })
          ),
          catchError((error) => of(BudgetActions.addBudgetFailure({ error })))
        )
      )
    )
  );

  // Update Budget
  updateBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.updateBudget),
      switchMap(({ budget }) =>
        this.budgetService
          .updateBudget(budget.id, budget.name, budget.amount)
          .pipe(
            map(({ budget }: BudgetResponse) =>
              BudgetActions.updateBudgetSuccess({ budget })
            ),
            catchError((error) =>
              of(BudgetActions.updateBudgetFailure({ error }))
            )
          )
      )
    )
  );

  // Delete Budget
  deleteBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.removeBudget),
      switchMap(({ budget }) =>
        this.budgetService.deleteBudget(budget.id).pipe(
          map(() => BudgetActions.removeBudgetSuccess({ budget })),
          catchError((error) =>
            of(BudgetActions.removeBudgetFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private budgetService: BudgetService
  ) {}
}
