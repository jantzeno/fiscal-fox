import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as ExpenseActions from '../actions/expense.actions';
import { ExpenseService } from '../../services/data/expense.service';
import {
  ExpenseResponse,
  AllExpensesResponse,
} from '../../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseEffects {
  // Get All Expenses
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpenses),
      switchMap(() =>
        this.expenseService.getAllExpenses().pipe(
          map(({ expenses }: AllExpensesResponse) =>
            ExpenseActions.loadExpensesSuccess({ expenses })
          ),
          catchError((error) =>
            of(ExpenseActions.loadExpensesFailure({ error }))
          )
        )
      )
    )
  );

  // Add Expense
  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.addExpense),
      switchMap(({ expense }) =>
        this.expenseService.createExpense(expense.name, expense.amount).pipe(
          map(({ expense }: ExpenseResponse) =>
            ExpenseActions.addExpenseSuccess({ expense })
          ),
          catchError((error) => of(ExpenseActions.addExpenseFailure({ error })))
        )
      )
    )
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

  // Delete Expense
  deleteExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.removeExpense),
      switchMap(({ expense }) =>
        this.expenseService.deleteExpense(expense.id).pipe(
          map(() => ExpenseActions.removeExpenseSuccess({ expense })),
          catchError((error) =>
            of(ExpenseActions.removeExpenseFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private expenseService: ExpenseService
  ) {}
}
