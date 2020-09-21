import { createReducer, on, Action } from '@ngrx/store';
import { Expense } from '../../models/expense.model';
import * as ExpenseActions from '../actions/expense.actions';
import { ExpenseState } from '../models/expense-state.model';

export const initialState: ExpenseState = {
  expenses: [],
  isLoading: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  // Load Expenses
  on(ExpenseActions.loadExpenses, (state) => ({ ...state, isLoading: true })),
  on(ExpenseActions.loadExpensesSuccess, (state, { expenses }) => ({
    ...state,
    expenses,
    isLoading: false,
    errorMessage: null,
  })),
  on(ExpenseActions.loadExpensesFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    errorMessage: error,
  })),
  // Add Expense
  on(ExpenseActions.addExpense, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ExpenseActions.addExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: [...state.expenses, expense],
    isLoading: false,
    errorMessage: null,
  })),
  on(ExpenseActions.addExpenseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  })),
  // Update Expense
  on(ExpenseActions.updateExpense, (state) => ({ ...state, loading: true })),
  on(ExpenseActions.updateExpenseSuccess, (state, { index, expense }) => {
    // Remove outdated expense item
    const modExpenses: Array<Expense> = state.expenses.filter(
      (b) => b._id !== expense._id
    );
    return {
      ...state,
      // Modified expense is moved to the end
      expenses: [...modExpenses, expense],
      // Replace at same index
      // expenses: [
      //   ...state.expenses.slice(0, index),
      //   expense
      //   ...state.expenses.slice(index + 1),
      // ],
      isLoading: false,
      errorMessage: null,
    };
  }),
  on(ExpenseActions.updateExpenseFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      errorMessage: error,
    };
  }),
  // Delete Expense
  on(ExpenseActions.removeExpense, (state) => ({ ...state, isLoading: true })),
  on(ExpenseActions.removeExpenseSuccess, (state, { expense }) => ({
    ...state,
    expenses: state.expenses.filter((b) => b._id !== expense._id),
    isLoading: false,
    errorMessage: null,
  })),
  on(ExpenseActions.removeExpenseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  }))
);

export function expenseReducer(
  state: ExpenseState | undefined,
  action: Action
) {
  return reducer(state, action);
}
