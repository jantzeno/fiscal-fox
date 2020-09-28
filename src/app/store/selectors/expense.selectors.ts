import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { ExpenseState } from '../models/expense-state.model';

export const selectExpenseState = ({ expenseState }: ApplicationState) =>
  expenseState;

export const getExpenses = createSelector(
  selectExpenseState,
  ({ expenses }: ExpenseState) => expenses
);

export const getExpenseById = createSelector(
  selectExpenseState,
  ({ expenses }: ExpenseState, props) =>
    expenses.find((ex) => ex.id === props.expenseId)
);
