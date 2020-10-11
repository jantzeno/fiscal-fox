import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as BudgetActions from '../actions/budget.actions';
import { BudgetService } from '../../../../services/http/budget.service';
import {
  BudgetResponse,
  BudgetsResponse,
} from '../../../../services/http/models/budgets-response.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class BudgetEffects {
  constructor(
    private actions$: Actions,
    private budgetService: BudgetService,
    private router: Router
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

  // Create Budget Side Effect
  createBudgetSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BudgetActions.createBudgetSuccess),
        tap(({ budget }) => {
          if (budget) {
            this.router.navigate(['/dashboard']);
          }
        })
      ),
    { dispatch: false }
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

  // Update Budget Side Effect
  updateBudgetSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BudgetActions.updateBudgetSuccess),
        tap(({ budget }) => {
          if (budget) {
            this.router.navigate(['/dashboard']);
          }
        })
      ),
    { dispatch: false }
  );

  // Delete Budget
  deleteBudget$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BudgetActions.deleteBudget),
      switchMap(({ budget }) =>
        this.budgetService.deleteBudget(budget.id).pipe(
          map(() => BudgetActions.deleteBudgetSuccess({ budget })),
          catchError((error) =>
            of(BudgetActions.deleteBudgetFailure({ error }))
          )
        )
      )
    )
  );

  // Delete Budget Side Effect
  deleteBudgetSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BudgetActions.deleteBudgetSuccess),
        tap(({ budget }) => {
          if (budget) {
            this.router.navigate(['/dashboard']);
          }
        })
      ),
    { dispatch: false }
  );
}
