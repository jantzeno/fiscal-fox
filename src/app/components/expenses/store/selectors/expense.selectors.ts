import { createSelector } from '@ngrx/store';
import { Params } from '@angular/router';
import { ApplicationState } from '../../../../store/models/application-state.model';
import { ExpensesState } from '../models/expenses-state.model';
import { ExpenseState } from '../models/expense-state.model';
import { getRouteParams } from '../../../../store/selectors/router.selectors';

export const expensesState = ({ expensesState }: ApplicationState) =>
  expensesState;
export const selectedExpenseState = ({ selectedExpense }: ApplicationState) =>
  selectedExpense;

export const getExpenses = createSelector(
  expensesState,
  (state: ExpensesState) => state?.expenses
);

export const getExpensesLoaded = createSelector(
  expensesState,
  (state: ExpensesState) => state?.isLoaded
);

export const getSelectedExpense = createSelector(
  selectedExpenseState,
  (state: ExpenseState) => state?.expense
);

export const getSelectedExpenseId = createSelector(
  getRouteParams,
  (params: Params) => params['expenseId']
);
