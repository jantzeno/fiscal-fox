import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as ExpenseActions from '../actions/expense.actions';
import { ExpenseService } from '../../../../services/http/expense.service';
import {
  ExpenseResponse,
  ExpensesResponse,
} from '../../../../services/http/models/expenses-response.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ExpenseEffects {
  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService,
    private router: Router
  ) {}

  // Get All Expenses
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpenses),
      switchMap(() =>
        this.expenseService.getExpenses().pipe(
          map(({ expenses }: ExpensesResponse) =>
            ExpenseActions.loadExpensesSuccess({ expenses })
          ),
          catchError((error) =>
            of(ExpenseActions.loadExpensesFailure({ error }))
          )
        )
      )
    )
  );

  // Get All Expenses
  loadExpensesByBudgetId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpensesByBudgetId),
      switchMap(({ budgetId }) =>
        this.expenseService.getExpensesByBudgetId(budgetId).pipe(
          map(({ expenses }: ExpensesResponse) =>
            ExpenseActions.loadExpensesByBudgetIdSuccess({ expenses })
          ),
          catchError((error) =>
            of(ExpenseActions.loadExpensesByBudgetIdFailure({ error }))
          )
        )
      )
    )
  );

  // Get Expense
  loadExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpense),
      switchMap(({ expenseId }) =>
        this.expenseService.getExpense(expenseId).pipe(
          map((expense: ExpenseResponse) =>
            ExpenseActions.loadExpenseSuccess({ ...expense })
          ),
          catchError((error) =>
            of(ExpenseActions.loadExpenseFailure({ error }))
          )
        )
      )
    )
  );

  // Create Expense
  createExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.createExpense),
      switchMap(({ expense }) =>
        this.expenseService
          .createExpense(expense.name, expense.budgetId, expense.amount)
          .pipe(
            map(({ expense }: ExpenseResponse) =>
              ExpenseActions.createExpenseSuccess({ expense })
            ),
            catchError((error) =>
              of(ExpenseActions.createExpenseFailure({ error }))
            )
          )
      )
    )
  );

  // Create Expense Side Effect
  createExpenseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpenseActions.createExpenseSuccess),
        tap(({ expense }) => {
          if (expense) {
            this.router.navigate(['/budgets/details/', expense.budgetId]);
          }
        })
      ),
    { dispatch: false }
  );

  // Update Expense
  updateExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.updateExpense),
      switchMap(({ expense }) =>
        this.expenseService
          .updateExpense(expense.id, expense.name, expense.amount)
          .pipe(
            map(({ expense }: ExpenseResponse) =>
              ExpenseActions.updateExpenseSuccess({ expense })
            ),
            catchError((error) =>
              of(ExpenseActions.updateExpenseFailure({ error }))
            )
          )
      )
    )
  );

  // Update Expense Side Effect
  updateExpenseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpenseActions.updateExpenseSuccess),
        tap(({ expense }) => {
          if (expense) {
            this.router.navigate(['/budgets/details/', expense.budgetId]);
          }
        })
      ),
    { dispatch: false }
  );

  // Delete Expense
  deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.deleteExpense),
      switchMap(({ expense }) =>
        this.expenseService.deleteExpense(expense.id).pipe(
          map(() => ExpenseActions.deleteExpenseSuccess({ expense })),
          catchError((error) =>
            of(ExpenseActions.deleteExpenseFailure({ error }))
          )
        )
      )
    )
  );

  // Delete Expense Side Effect
  deleteExpenseSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExpenseActions.deleteExpenseSuccess),
        tap(({ expense }) => {
          if (expense) {
            this.router.navigate(['/budgets/details/', expense.budgetId]);
          }
        })
      ),
    { dispatch: false }
  );
}
