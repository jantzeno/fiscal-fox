import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetService } from '../../../../services/http/budget.service';
import {
  BudgetResponse,
  BudgetsResponse,
} from '../../../../services/http/models/budgets-response.model';

@Injectable({ providedIn: 'root' })
export class BudgetEffects {
  constructor(
    private actions$: Actions,
    private budgetService: BudgetService
  ) {}

  // Get All Budgets
  loadBudgets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.loadBudgets),
      switchMap(() =>
        this.budgetService.getBudgets().pipe(
          map(({ budgets }: BudgetsResponse) =>
            BudgetActions.loadBudgetsSuccess({ budgets })
          ),
          catchError((error) => of(BudgetActions.loadBudgetsFailure({ error })))
        )
      )
    )
  );

  // Get Budget
  loadBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.loadBudget),
      switchMap(({ budgetId }) =>
        this.budgetService.getBudget(budgetId).pipe(
          map((budget: BudgetResponse) =>
            BudgetActions.loadBudgetSuccess({ ...budget })
          ),
          catchError((error) => of(BudgetActions.loadBudgetFailure({ error })))
        )
      )
    )
  );

  // Create Budget
  createBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.createBudget),
      switchMap(({ budget }) =>
        this.budgetService.createBudget(budget.name, budget.amount).pipe(
          map(({ budget }: BudgetResponse) =>
            BudgetActions.createBudgetSuccess({ budget })
          ),
          catchError((error) =>
            of(BudgetActions.createBudgetFailure({ error }))
          )
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
}
