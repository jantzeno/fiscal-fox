import { createReducer, on, Action } from '@ngrx/store';
import * as ExpenseActions from '../actions/expense.actions';
import { EXPENSES_INITIAL_STATE } from '../models/expenses-initial-state';
import { ExpensesState } from '../models/expenses-state.model';

const reducer = createReducer(
  EXPENSES_INITIAL_STATE,
  // Load Expenses
  on(ExpenseActions.loadExpenses, (state) => ({ ...state, isLoading: true })),
  on(ExpenseActions.loadExpensesSuccess, (state, { expenses }) => ({
    ...state,
    expenses,
    isLoading: false,
    isLoaded: true,
  })),
  on(ExpenseActions.loadExpensesFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
  })),

  // Load Expenses By Budget Id
  on(ExpenseActions.loadExpensesByBudgetId, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ExpenseActions.loadExpensesByBudgetIdSuccess, (state, { expenses }) => ({
    ...state,
    expenses,
    isLoading: false,
    isLoaded: true,
  })),
  on(ExpenseActions.loadExpensesByBudgetIdFailure, (state) => ({
    ...state,
    isLoading: false,
    isLoaded: false,
  }))
);

export function expensesReducer(
  state: ExpensesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
