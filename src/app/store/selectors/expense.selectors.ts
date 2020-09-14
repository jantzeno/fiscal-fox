import { AppState, ExpenseState } from '../application-state.model';
import { createSelector } from '@ngrx/store';

export const selectExpenseState = ({ expenseState }: AppState) => expenseState;

export const getExpenses = createSelector(
  selectExpenseState,
  ({ expenses }: ExpenseState) => expenses
);
