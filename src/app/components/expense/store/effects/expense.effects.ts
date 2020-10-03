import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as ExpenseActions from '../actions/expense.actions';
import { ExpenseService } from '../../../../services/data/expense.service';
import { ExpenseResponse, ExpensesResponse } from '../models/expense.model';
import { selectedExpenseState } from '../selectors';
import { ExpenseState } from '../models/expense-state.model';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { loadExpenseRoute$ } from 'src/app/store/router-helpers';
import { routeChange } from 'src/app/store';

@Injectable({ providedIn: 'root' })
export class ExpenseEffects {
  // Get All Expenses
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpenses),
      switchMap(() =>
        this.expenseService.getAllExpenses().pipe(
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

  // Get Expense
  loadExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.loadExpense),
      switchMap(({ expenseId }) =>
        this.expenseService.getExpense(expenseId).pipe(
          map((expense: ExpenseResponse) =>
            ExpenseActions.loadExpenseSuccess({ expense })
          ),
          catchError((error) =>
            of(ExpenseActions.loadExpenseFailure({ error }))
          )
        )
      )
    )
  );

  // Load Selected Expense
  checkExpenseRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routeChange),
      withLatestFrom(this.store.select(selectedExpenseState)),
      loadExpenseRoute$<ExpenseState>(
        ExpenseActions.loadExpense,
        'expenses/:expenseId'
      )
    )
  );

  // Create Expense
  createExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpenseActions.createExpense),
      switchMap(({ expense }) =>
        this.expenseService.createExpense(expense.name, expense.amount).pipe(
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
    private store: Store<ApplicationState>,
    private expenseService: ExpenseService
  ) {}
}
