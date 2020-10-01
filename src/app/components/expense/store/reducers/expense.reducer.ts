import { createReducer, on, Action } from '@ngrx/store';
import * as ExpenseActions from '../actions/expense.actions';
import { ExpenseState } from '../models/expense-state.model';
import { EXPENSE_INITIAL_STATE } from '../models/expense-initial-state';

const reducer = createReducer(
  EXPENSE_INITIAL_STATE,

  // Load Expense
  on(ExpenseActions.loadExpense, (state) => ({ ...state, isLoading: true })),
  on(ExpenseActions.loadExpenseSuccess, (state, { expense }) => ({
    ...state,
    expense,
    isLoading: false,
    isLoaded: true,
  })),
  on(ExpenseActions.loadExpensesFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
  }))
);

export function expenseReducer(
  state: ExpenseState | undefined,
  action: Action
) {
  return reducer(state, action);
}
