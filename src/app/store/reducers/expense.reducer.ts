import { createReducer, on, Action } from '@ngrx/store';
import { Expense } from '../../models/expense';
import * as ExpenseActions from '../actions/expense.actions';
import { AppState, ExpenseState } from '../application-state.model';

export const initialState: ExpenseState = {
  expenses: new Map<number, Expense>([
    [1, new Expense('Computer Refresh', 2000, 1, 1)],
    [2, new Expense('Copier Lease', 1000, 2, 1)],
    [3, new Expense('Software License', 500, 3, 1)],
  ]),
};

const reducer = createReducer(
  initialState,
  on(ExpenseActions.updateExpense, (state, action) => ({
    ...state,
  })),
  on(ExpenseActions.deleteExpense, (state, action) => ({
    ...state,
  }))
);

export function expenseReducer(
  state: ExpenseState | undefined,
  action: Action
) {
  return reducer(state, action);
}
